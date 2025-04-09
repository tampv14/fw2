import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

interface IProduct {
  name: string;
  price: number;
  images: string;
  category: string;
}

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct>();

  useEffect(() => {
    const detailById = async () => {
      if (id) {
        try {
          const { data } = await axios.get(
            `http://localhost:3000/products/${id}`
          );

          console.log("Product data:", data);

          setProduct(data);
        } catch (error) {
          console.error("Error fetching product details", error);
        }
      }
    };

    detailById();
  }, [id]);

  if (!product) {
    return <div className="text-center py-6">Không tìm thấy sản phẩm.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Phần hình ảnh sản phẩm */}
        <div className="flex justify-center">
          <img
            src={product.images}
            alt={product.name}
            className="w-64 h-64 object-cover rounded-lg shadow-lg"  // Sửa lại đây để giảm kích thước ảnh
          />
        </div>

        {/* Phần chi tiết sản phẩm */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">{product.name}</h2>
          <p className="text-xl text-red-500 font-semibold mb-6">
            ${product.price}
          </p>
          <p className="text-gray-700 mb-6">Danh mục: {product.category}</p>

          {/* Add to Cart button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => alert("Sản phẩm đã được thêm vào giỏ hàng!")}
              className="px-6 py-2 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition-colors duration-300"
            >
              Thêm vào giỏ hàng
            </button>
            <button
              onClick={() => alert("Mua ngay!")}
              className="px-6 py-2 border border-red-500 text-red-500 font-medium rounded-md hover:bg-red-500 hover:text-white transition-colors duration-300"
            >
              Mua ngay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;