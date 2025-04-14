"use client"

export default function About() {
  return (
    <div className="container mx-auto p-4 my-10">
      <h2 className="text-2xl font-bold mb-4">Category name</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-8">
        {/* Product Card */}
        <div className="border rounded-lg shadow-lg p-4 relative group">
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">-35%</span>
          <div className="relative overflow-hidden">
            <img
              src="/src/assets/img/Cart (13).png"
              alt="Gucci duffle bag"
              className="w-full h-40 object-cover"
            />
            <button className="absolute bottom-0 left-0 w-full bg-black text-white py-2 flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-red-500 translate-y-full group-hover:translate-y-0">
              🛒 Add To Cart
            </button>
          </div>

          <h3 className="text-lg font-semibold mt-4">Gucci duffle bag</h3>
          <p className="text-red-500 text-lg font-bold">
            $960 <span className="text-gray-400 line-through">$1160</span>
          </p>
        </div>

        <div className="border rounded-lg shadow-lg p-4 relative group">
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">-35%</span>
          <div className="relative overflow-hidden">
            <img
              src="/src/assets/img/Cart (14).png"
              alt="RGB liquid CPU Cooler"
              className="w-full h-40 object-cover"
            />
            <button className="absolute bottom-0 left-0 w-full bg-black text-white py-2 flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-red-500 translate-y-full group-hover:translate-y-0">
              🛒 Add To Cart
            </button>
          </div>
          <h3 className="text-lg font-semibold mt-4">RGB liquid CPU Cooler</h3>
          <p className="text-red-500 text-lg font-bold">$1960</p>
        </div>

        <div className="border rounded-lg shadow-lg p-4 relative group">
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">-35%</span>
          <div className="relative overflow-hidden">
            <img
              src="/src/assets/img/Cart (15).png"
              alt="GP11 Shooter USB Gamepad"
              className="w-full h-40 object-cover"
            />
            <button className="absolute bottom-0 left-0 w-full bg-black text-white py-2 flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-red-500 translate-y-full group-hover:translate-y-0">
              🛒 Add To Cart
            </button>
          </div>
          <h3 className="text-lg font-semibold mt-4">GP11 Shooter USB Gamepad</h3>
          <p className="text-red-500 text-lg font-bold">$550</p>
        </div>

        <div className="border rounded-lg shadow-lg p-4 relative group">
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">-35%</span>
          <div className="relative overflow-hidden">
            <img
              src="/src/assets/img/Cart (16).png"
              alt="Quilted Satin Jacket"
              className="w-full h-40 object-cover"
            />
            <button className="absolute bottom-0 left-0 w-full bg-black text-white py-2 flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-red-500 translate-y-full group-hover:translate-y-0">
              🛒 Add To Cart
            </button>
          </div>
          <h3 className="text-lg font-semibold mt-4">Quilted Satin Jacket</h3>
          <p className="text-red-500 text-lg font-bold">$750</p>
        </div>
        <div className="border rounded-lg shadow-lg p-4 relative group">
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">-35%</span>
          <div className="relative overflow-hidden">
            <img
              src="/src/assets/img/Cart (17).png"
              alt="Quilted Satin Jacket"
              className="w-full h-40 object-cover"
            />
            <button className="absolute bottom-0 left-0 w-full bg-black text-white py-2 flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-red-500 translate-y-full group-hover:translate-y-0">
              🛒 Add To Cart
            </button>
          </div>
          <h3 className="text-lg font-semibold mt-4">Quilted Satin Jacket</h3>
          <p className="text-red-500 text-lg font-bold">$750</p>
        </div>
        <div className="border rounded-lg shadow-lg p-4 relative group">
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">-35%</span>
          <div className="relative overflow-hidden">
            <img
              src="/src/assets/img/Cart (18).png"
              alt="Quilted Satin Jacket"
              className="w-full h-40 object-cover"
            />
            <button className="absolute bottom-0 left-0 w-full bg-black text-white py-2 flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-red-500 translate-y-full group-hover:translate-y-0">
              🛒 Add To Cart
            </button>
          </div>
          <h3 className="text-lg font-semibold mt-4">Quilted Satin Jacket</h3>
          <p className="text-red-500 text-lg font-bold">$750</p>
        </div>
        <div className="border rounded-lg shadow-lg p-4 relative group">
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">-35%</span>
          <div className="relative overflow-hidden">
            <img
              src="/src/assets/img/Cart (12).png"
              alt="Quilted Satin Jacket"
              className="w-full h-40 object-cover"
            />
            <button className="absolute bottom-0 left-0 w-full bg-black text-white py-2 flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-red-500 translate-y-full group-hover:translate-y-0">
              🛒 Add To Cart
            </button>
          </div>
          <h3 className="text-lg font-semibold mt-4">Quilted Satin Jacket</h3>
          <p className="text-red-500 text-lg font-bold">$750</p>
        </div>
        <div className="border rounded-lg shadow-lg p-4 relative group">
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">-35%</span>
          <div className="relative overflow-hidden">
            <img
              src="/src/assets/img/Cart (11).png"
              alt="Quilted Satin Jacket"
              className="w-full h-40 object-cover"
            />
            <button className="absolute bottom-0 left-0 w-full bg-black text-white py-2 flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-red-500 translate-y-full group-hover:translate-y-0">
              🛒 Add To Cart
            </button>
          </div>
          <h3 className="text-lg font-semibold mt-4">Quilted Satin Jacket</h3>
          <p className="text-red-500 text-lg font-bold">$750</p>
        </div>
      </div>
    </div>
  )
}
