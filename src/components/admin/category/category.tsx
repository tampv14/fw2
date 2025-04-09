import { useForm } from "react-hook-form";
import { ICate } from "../../../interface/category";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { message } from "antd";
import { useState } from "react";

const CategoryAdd = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ICate>();

  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [image, setImage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const mutation = useMutation({
    mutationFn: async (cate: ICate) => {
      try {
        const { data } = await axios.post(
          "http://localhost:3000/categories",
          cate
        );
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    onSuccess: (res) => {
      message.success("Thêm danh mục thành công");
      queryClient.invalidateQueries({ queryKey: ["cate"] });
      navigate("/dashboard/category/list");
    },
  });

  const onSubmit = (cate: ICate) => {
    mutation.mutate(cate);
  };

  const uploadImage = async (file: FileList | null) => {
    if (!file) return;
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file[0]);
    formData.append("upload_preset", "reacttest"); // preset của bạn

    try {
      const { data } = await axios.post(
        "https://api.cloudinary.com/v1_1/dkpfaleot/image/upload",
        formData
      );
      setImage(data.url);
      setValue("images", data.url); // gán URL vào form
      setLoading(false);
    } catch (error) {
      console.error("Upload thất bại:", error);
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
      <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">
        📝 Thêm Danh Mục
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Tên danh mục */}
        <div>
          <label className="block text-lg font-medium text-gray-600 mb-2">
            Tên danh mục
          </label>
          <input
            type="text"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            placeholder="Nhập tên danh mục..."
            {...register("name", { required: "Không được bỏ trống" })}
          />
          {errors.name?.message && (
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}
        </div>

        {/* Upload hình ảnh */}
        <div>
          <label className="block text-lg font-medium text-gray-600 mb-2">
            Hình ảnh
          </label>
          <input
            type="file"
            onChange={(e) => uploadImage(e.target.files)}
            className="w-full p-3 border rounded-lg"
          />
          {loading && <p className="text-blue-500 mt-2">Đang tải ảnh...</p>}
          {image && (
            <img
              src={image}
              alt="Uploaded"
              className="mt-2 w-32 h-32 object-cover rounded"
            />
          )}
        </div>

        {/* Trường ẩn để gửi URL ảnh */}
        <input type="hidden" {...register("images")} />

        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-700 transition duration-300"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default CategoryAdd;
