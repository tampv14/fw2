import axios from "axios";
import React, { useState } from "react";
import { ICate } from "../../interface/category";
import { useQuery } from "@tanstack/react-query";
import { IProduct } from "../../interface/product";
import { Link } from "react-router-dom";
import Herobanner from "./herobanner";
import Countdouwn from "./countdouwn";
import Service from "./service";
import Arrival from "./arrival";
import Otherpd from "./otherpd";

const Home = () => {
  const { data: categories } = useQuery<ICate[]>({
    queryKey: ["cate"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:3000/categories");
      return data;
    },
  });

  const { data: products } = useQuery<IProduct[]>({
    queryKey: ["products"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:3000/products");
      return data;
    },
  });

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filter products based on the selected category
  const filteredProducts = selectedCategory
    ? products?.filter((product) => product.category === selectedCategory)
    : products;

  // Pagination for categories
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil((categories?.length || 0) / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const paginatedCategories = categories?.slice(startIdx, startIdx + itemsPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  // Pagination for products
  const [productPages, setProductPages] = useState(1);
  const itemsPerPages = 4;
  const totalPagess = Math.ceil((filteredProducts?.length || 0) / itemsPerPages);
  const startIndex = (productPages - 1) * itemsPerPages;
  const paginatedProducts = filteredProducts?.slice(startIndex, startIndex + itemsPerPages);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Categories and Hero Banner */}
      <Herobanner/>

      {/* JBL Speaker Banner */}

      {/* Browse By Category */}
      <div className="my-12">
        <div className="flex items-center mb-4">
          <div className="w-1 h-10 bg-red-500 mr-3"></div>
          <span className="text-red-500 font-medium">Categories</span>
        </div>

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Browse By Category</h2>
          <div className="flex space-x-2">
            <button onClick={handlePrev} disabled={currentPage === 1} className="p-2 border rounded hover:bg-gray-100 transition disabled:opacity-50">
              {/* Previous Button */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button onClick={handleNext} disabled={currentPage === totalPages} className="p-2 border rounded hover:bg-gray-100 transition disabled:opacity-50">
              {/* Next Button */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <div className="container mx-auto p-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {paginatedCategories?.map((cate) => (
              <Link to={`/category/${cate.name}`} key={cate.id}>
              <div
                className="group border rounded-lg p-4 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 h-32 hover:border-primary hover:shadow-md hover:bg-red-500"
              >
                <img src={cate.images} alt={cate.name} className="h-10 w-10 object-contain mb-2 transition-all group-hover:scale-110" />
                <span className="text-center font-medium group-hover:text-white">{cate.name}</span>
              </div>
            </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="my-12">
        <div className="flex items-center mb-4">
          <div className="w-1 h-10 bg-red-500 mr-3"></div>
          <span className="text-red-500 font-medium">This Month</span>
        </div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Best Selling Products</h2>
          <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
            View All
          </button>
        </div>
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {paginatedProducts?.map((product) => (
              <div
                key={product.id}
                className="bg-gray-50 rounded-lg overflow-hidden group"
              >
                <div className="relative h-60 bg-gray-100">
                  <img
                    src={product.images}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link to={`/product/details/${product.id}`}>
                    <button className="bg-white text-black font-medium py-2 px-4 rounded-md hover:bg-red-500 hover:text-white transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      Add to Cart
                    </button>
                    </Link>
                  </div>
                </div>
                <div className="p-4">
                  <Link to={`product-details/${product.id}`}>
                    <h3 className="font-medium">{product.name}</h3>
                  </Link>
                  <div className="flex items-center mt-2">
                    <span className="text-red-500 font-semibold">
                      ${product.price}
                    </span>
                  </div>
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                    <span className="text-xs text-gray-500 ml-2">(65)</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8 space-x-2">
            <button
              onClick={() => setProductPages((prev) => Math.max(prev - 1, 1))}
              disabled={productPages === 1}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Prev
            </button>
            {[...Array(totalPagess)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => setProductPages(idx + 1)}
                className={`px-3 py-1 border rounded ${
                  productPages === idx + 1 ? "bg-red-500 text-white" : ""
                }`}
              >
                {idx + 1}
              </button>
            ))}
            <button
              onClick={() =>
                setProductPages((prev) => Math.min(prev + 1, totalPagess))
              }
              disabled={productPages === totalPagess}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <div className="my-12">
        <Countdouwn/>
      </div>

      {/* Our Products */}
      <Otherpd/>

      {/* Best Selling Products */}
      {/* New Arrival */}
      <Arrival/>
      {/* Service Features */}
      <Service/>
    </div>
  );
};

export default Home;
