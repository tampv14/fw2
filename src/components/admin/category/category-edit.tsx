import { useForm } from "react-hook-form";
import { ICate } from "../../../interface/category";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { message } from "antd";

const CategoryEdit = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<ICate>();

  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { id } = useParams();
  const [image, setImage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // Fetch data cũ
  const { data } = useQuery<ICate>({
    queryKey: ["cates", id],
    queryFn: async () => {
      const { data } = await axios.get(
        `http://localhost:3000/categories/${id}`
      );
      return data;
    },
  });

  // Set lại giá trị vào form khi data đã có
  useEffect(() => {
    if (data) {
      reset(data);
      setImage(data.images); // hiển thị ảnh cũ
    }
  }, [data, reset]);

  // Upload ảnh lên Cloudinary
  const uploadImage = async (file: FileList | null) => {
    if (!file) return;
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file[0]);
    formData.append("upload_preset", "reacttest");

    try {
      const { data } = await axios.post(
        "https://api.cloudinary.com/v1_1/dkpfaleot/image/upload",
        formData
      );
      setImage(data.url);
      setValue("images", data.url); // gán lại vào form
      setLoading(false);
    } catch (error) {
      console.error("Upload ảnh lỗi:", error);
      setLoading(false);
    }
  };

  // Mutation cập nhật danh mục
  const mutation = useMutation({
    mutationFn: async (cate: ICate) => {
      const { data } = await axios.put(
        `http://localhost:3000/categories/${id}`,
        cate
      );
      return data;
    },
    onSuccess: () => {
      message.success("Cập nhật danh mục thành công");
      queryClient.invalidateQueries({ queryKey: ["cates"] });
      navigate("/dashboard/category/list");
    },
  });

  const onSubmit = (cate: ICate) => {
    mutation.mutate(cate);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">🛠 Cập Nhật Danh Mục</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Tên danh mục */}
        <div>
          <label className="block font-medium mb-1">Tên danh mục</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Nhập tên danh mục..."
            {...register("name", {
              required: "Không được bỏ trống",
            })}
          />
          {errors.name?.message && (
            <span className="text-red-500">{errors?.name?.message}</span>
          )}
        </div>

        {/* Upload hình ảnh */}
        <div>
          <label className="block font-medium mb-1">Hình ảnh</label>
          <input
            type="file"
            className="w-full p-2 border rounded-md"
            onChange={(e) => uploadImage(e.target.files)}
          />
          {loading && <p className="text-blue-500 mt-2">Đang tải ảnh...</p>}
          {image && (
            <img
              src={image}
              alt="Ảnh danh mục"
              className="mt-2 w-32 h-32 object-cover rounded"
            />
          )}
        </div>

        {/* Trường hidden để lưu URL ảnh */}
        <input type="hidden" {...register("images")} />

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
        >
          Cập nhật
        </button>
      </form>
    </div>
  );
};

export default CategoryEdit;
