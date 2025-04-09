import { useForm } from "react-hook-form";
import { IProduct } from "../../../interface/product";
import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { message } from "antd";

const EditProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<IProduct>();

  const [imagePreview, setImagePreview] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const params = useParams();
  const queryclient = useQueryClient();
  const nav = useNavigate();

  // Lấy sản phẩm theo ID
  const { data } = useQuery<IProduct>({
    queryKey: ["products", params.id],
    queryFn: async () => {
      const { data: product } = await axios.get(
        `http://localhost:3000/products/${params.id}`
      );
      return product;
    },
  });

  useEffect(() => {
    if (data) {
      reset(data);
      setImagePreview(data.images); // hiển thị ảnh hiện tại
    }
  }, [data, reset]);

  // Upload ảnh mới
  const uploadImage = async (file: FileList | null) => {
    if (!file || file.length === 0) return;
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file[0]);
    formData.append("upload_preset", "reacttest"); // thay bằng preset thật

    try {
      const { data } = await axios.post(
        "https://api.cloudinary.com/v1_1/dkpfaleot/image/upload",
        formData
      );
      setValue("images", data.url); // cập nhật URL trong form
      setImagePreview(data.url); // preview ảnh mới
      setLoading(false);
    } catch (error) {
      console.log("Lỗi upload ảnh", error);
      setLoading(false);
    }
  };

  const mutation = useMutation({
    mutationFn: async (product: IProduct) => {
      try {
        const { data } = await axios.put(
          `http://localhost:3000/products/${params.id}`,
          product
        );
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    onSuccess: (res) => {
      message.success("Cập nhật thành công");
      queryclient.invalidateQueries({ queryKey: ["products"] });
      nav("/dashboard/product/list");
    },
  });

  const onsubmit = (product: IProduct) => {
    mutation.mutate(product);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">🛠️ Cập Nhật Sản Phẩm</h2>
      <form onSubmit={handleSubmit(onsubmit)} className="space-y-6">
        {/* Tên sản phẩm */}
        <div>
          <label className="block text-sm font-medium mb-2">Tên sản phẩm</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Nhập tên sản phẩm"
            {...register("name", {
              required: "Không được để trống",
            })}
          />
          {errors.name?.message && (
            <span className="text-red-500">{errors?.name?.message}</span>
          )}
        </div>

        {/* Hình ảnh */}
        <div>
          <label className="block text-sm font-medium mb-2">Hình ảnh sản phẩm</label>
          <input type="file" onChange={(e) => uploadImage(e.target.files)} />
          {loading && <p className="text-gray-500 mt-2">Đang tải ảnh...</p>}
          {imagePreview && (
            <img src={imagePreview} alt="Preview" className="w-32 mt-2 rounded" />
          )}
          <input type="hidden" {...register("images")} />
        </div>

        {/* Giá sản phẩm */}
        <div>
          <label className="block text-sm font-medium mb-2">Giá sản phẩm</label>
          <input
            type="number"
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Nhập giá sản phẩm"
            {...register("price", {
              required: "Không được bỏ trống",
              min: {
                value: 1000,
                message: "Phải lớn hơn 1000",
              },
            })}
          />
          {errors.price?.message && (
            <span className="text-red-500">{errors?.price?.message}</span>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Giá ban đầu sản phẩm</label>
          <input
            type="number"
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="Nhập giá ban đầu của sản phẩm"
            {...register("originalPrice", {
              required: "Không được bỏ trống",
              min: {
                value: 1000,
                message: "Phải lớn hơn 1000",
              },
            })}
          />
          {errors.originalPrice?.message && (
            <span className="text-red-500">{errors?.originalPrice?.message}</span>
          )}
        </div>

        {/* Danh mục */}
        <div>
          <label className="block text-sm font-medium mb-2">Chọn danh mục</label>
          <select
            className="w-full p-3 border border-gray-300 rounded-md"
            {...register("category")}
          >
            <option value="">Chọn danh mục</option>
            <option value="Phones">Phones</option>
            <option value="Computers">Computers</option>
            <option value="SmartWacth">SmartWacth</option>
            <option value="Camera">Camera</option>
            <option value="HeadPhones">HeadPhones</option>
            <option value="Gaming">Gaming</option>
          </select>
        </div>

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition"
          >
            Cập nhật
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
