import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IProduct } from "../../../interface/product";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { message } from "antd";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<IProduct>();
  const [imagePreview, setImagePreview] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const queryclient = useQueryClient();
  const nav = useNavigate();

  // Upload ảnh lên Cloudinary
  const uploadImage = async (file: FileList | null) => {
    if (!file || file.length === 0) return;
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file[0]);
    formData.append("upload_preset", "reacttest"); // thay bằng preset của bạn

    try {
      const { data } = await axios.post(
        "https://api.cloudinary.com/v1_1/dkpfaleot/image/upload",
        formData
      );
      setValue("images", data.url); // set URL ảnh vào field images
      setImagePreview(data.url); // preview
      setLoading(false);
    } catch (error) {
      console.log("Upload thất bại", error);
      setLoading(false);
    }
  };

  const mutation = useMutation({
    mutationFn: async (product: IProduct) => {
      try {
        const { data } = await axios.post(`http://localhost:3000/products`, product);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
    onSuccess: (res) => {
      message.success("Thêm thành công");
      queryclient.invalidateQueries({ queryKey: ["products"] });
      nav("/dashboard/product/list");
    },
  });

  const onsubmit = (product: IProduct) => {
    mutation.mutate(product);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6"> 📝 Thêm Sản Phẩm</h2>
      <form onSubmit={handleSubmit(onsubmit)} className="space-y-6">
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

        <div>
          <label className="block text-sm font-medium mb-2">Hình ảnh sản phẩm</label>
          <input type="file" onChange={(e) => uploadImage(e.target.files)} />
          {loading && <p className="text-gray-500 mt-2">Đang tải ảnh...</p>}
          {imagePreview && (
            <img src={imagePreview} alt="Preview" className="w-32 mt-2 rounded" />
          )}
          <input type="hidden" {...register("images")} />
        </div>

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

        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition"
          >
            Thêm sản phẩm
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
