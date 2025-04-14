import React from 'react'

const Otherpd = () => {
  return (
    <div className="my-12 container mx-auto px-4">
        <div className="flex items-center mb-4">
          <div className="w-1 h-10 bg-red-500 mr-3"></div>
          <span className="text-red-500 font-medium">Our Products</span>
        </div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Explore Our Products</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Product 1: Breed Dry Dog Food */}
          <div className="bg-gray-50 rounded-lg overflow-hidden group">
            <div className="relative h-60 bg-gray-100">
              <img
                src="/src/assets/img/Cart (17).png"
                alt="Breed Dry Dog Food"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white text-black font-medium py-2 px-4 rounded-md hover:bg-red-500 hover:text-white transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-medium">Breed Dry Dog Food</h3>
              <div className="flex items-center mt-2">
                <span className="text-red-500 font-semibold">$100</span>
              </div>
              <div className="flex items-center mt-2">
                <svg
                  className="w-4 h-4 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  className="w-4 h-4 text-gray-300 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <span className="text-xs text-gray-500 ml-2">(35)</span>
              </div>
            </div>
          </div>

          {/* Product 2: CANON EOS DSLR Camera */}
          <div className="bg-gray-50 rounded-lg overflow-hidden group">
            <div className="relative h-60 bg-gray-100">
              <img
                src="/src/assets/img/Cart (16).png"
                alt="CANON EOS DSLR Camera"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white text-black font-medium py-2 px-4 rounded-md hover:bg-red-500 hover:text-white transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-medium">CANON EOS DSLR Camera</h3>
              <div className="flex items-center mt-2">
                <span className="text-red-500 font-semibold">$360</span>
              </div>
              <div className="flex items-center mt-2">
                <svg
                  className="w-4 h-4 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <span className="text-xs text-gray-500 ml-2">(95)</span>
              </div>
            </div>
          </div>

          {/* Product 3: ASUS FHD Gaming Laptop */}
          <div className="bg-gray-50 rounded-lg overflow-hidden group">
            <div className="relative h-60 bg-gray-100">
              <img
                src="/src/assets/img/Cart (15).png"
                alt="ASUS FHD Gaming Laptop"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white text-black font-medium py-2 px-4 rounded-md hover:bg-red-500 hover:text-white transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-medium">ASUS FHD Gaming Laptop</h3>
              <div className="flex items-center mt-2">
                <span className="text-red-500 font-semibold">$700</span>
              </div>
              <div className="flex items-center mt-2">
                <svg
                  className="w-4 h-4 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  className="w-4 h-4 text-gray-300 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <span className="text-xs text-gray-500 ml-2">(325)</span>
              </div>
            </div>
          </div>

          {/* Product 4: Curology Product Set */}
          <div className="bg-gray-50 rounded-lg overflow-hidden group">
            <div className="relative h-60 bg-gray-100">
              <img
                src="/src/assets/img/Cart (14).png"
                alt="Curology Product Set"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white text-black font-medium py-2 px-4 rounded-md hover:bg-red-500 hover:text-white transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-medium">Curology Product Set</h3>
              <div className="flex items-center mt-2">
                <span className="text-red-500 font-semibold">$500</span>
              </div>
              <div className="flex items-center mt-2">
                <svg
                  className="w-4 h-4 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  className="w-4 h-4 text-gray-300 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <span className="text-xs text-gray-500 ml-2">(145)</span>
              </div>
            </div>
          </div>

          {/* Product 5: Kids Electric Car */}
          <div className="bg-gray-50 rounded-lg overflow-hidden group">
            <div className="relative h-60 bg-gray-100">
              <div className="absolute top-3 left-3 z-10">
                <span className="bg-green-500 text-white text-xs py-1 px-2 rounded">
                  New
                </span>
              </div>
              <img
                src="/src/assets/img/Cart (13).png"
                alt="Kids Electric Car"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white text-black font-medium py-2 px-4 rounded-md hover:bg-red-500 hover:text-white transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-medium">Kids Electric Car</h3>
              <div className="flex items-center mt-2">
                <span className="text-red-500 font-semibold">$960</span>
              </div>
              <div className="flex items-center mt-2">
                <svg
                  className="w-4 h-4 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <span className="text-xs text-gray-500 ml-2">(65)</span>
              </div>
              <div className="flex space-x-2 mt-3">
                <button className="w-4 h-4 rounded-full bg-red-500"></button>
                <button className="w-4 h-4 rounded-full bg-red-700"></button>
              </div>
            </div>
          </div>

          {/* Product 6: Jr. Zoom Soccer Cleats */}
          <div className="bg-gray-50 rounded-lg overflow-hidden group">
            <div className="relative h-60 bg-gray-100">
              <img
                src="/src/assets/img/Cart (12).png"
                alt="Jr. Zoom Soccer Cleats"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white text-black font-medium py-2 px-4 rounded-md hover:bg-red-500 hover:text-white transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-medium">Jr. Zoom Soccer Cleats</h3>
              <div className="flex items-center mt-2">
                <span className="text-red-500 font-semibold">$160</span>
              </div>
              <div className="flex items-center mt-2">
                <svg
                  className="w-4 h-4 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  className="w-4 h-4 text-gray-300 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <span className="text-xs text-gray-500 ml-2">(35)</span>
              </div>
              <div className="flex space-x-2 mt-3">
                <button className="w-4 h-4 rounded-full bg-yellow-500"></button>
                <button className="w-4 h-4 rounded-full bg-red-500"></button>
              </div>
            </div>
          </div>

          {/* Product 7: GP11 Shooter USB Gamepad */}
          <div className="bg-gray-50 rounded-lg overflow-hidden group">
            <div className="relative h-60 bg-gray-100">
              <div className="absolute top-3 left-3 z-10">
                <span className="bg-green-500 text-white text-xs py-1 px-2 rounded">
                  New
                </span>
              </div>
              <img
                src="/src/assets/img/Cart (11).png"
                alt="GP11 Shooter USB Gamepad"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white text-black font-medium py-2 px-4 rounded-md hover:bg-red-500 hover:text-white transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-medium">GP11 Shooter USB Gamepad</h3>
              <div className="flex items-center mt-2">
                <span className="text-red-500 font-semibold">$650</span>
              </div>
              <div className="flex items-center mt-2">
                <svg
                  className="w-4 h-4 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  className="w-4 h-4 text-gray-300 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <span className="text-xs text-gray-500 ml-2">(55)</span>
              </div>
              <div className="flex space-x-2 mt-3">
                <button className="w-4 h-4 rounded-full bg-black"></button>
                <button className="w-4 h-4 rounded-full bg-red-500"></button>
              </div>
            </div>
          </div>

          {/* Product 8: Quilted Satin Jacket */}
          <div className="bg-gray-50 rounded-lg overflow-hidden group">
            <div className="relative h-60 bg-gray-100">
              <img
                src="/src/assets/img/Cart (18).png"
                alt="Quilted Satin Jacket"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white text-black font-medium py-2 px-4 rounded-md hover:bg-red-500 hover:text-white transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
                  Add to Cart
                </button>
              </div>
              <div className="absolute top-3 right-3 flex flex-col space-y-2">
                <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </button>
                <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-medium">Quilted Satin Jacket</h3>
              <div className="flex items-center mt-2">
                <span className="text-red-500 font-semibold">$680</span>
              </div>
              <div className="flex items-center mt-2">
                <svg
                  className="w-4 h-4 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <span className="text-xs text-gray-500 ml-2">(55)</span>
              </div>
              <div className="flex space-x-2 mt-3">
                <button className="w-4 h-4 rounded-full bg-green-800"></button>
                <button className="w-4 h-4 rounded-full bg-red-500"></button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-8">
          <button className="px-8 py-3 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white transition">
            View All Products
          </button>
        </div>
      </div>
  )
}

export default Otherpd
