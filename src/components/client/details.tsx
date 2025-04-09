
function Details() {
  const images = [
    "/src/assets/img/Frame 895 (1).png",
    "/src/assets/img/Frame 896.png",
    "/src/assets/img/Frame 897.png",
    "/src/assets/img/Frame 919.png",
  ];

  const relatedItems = [
    {
      name: "HAVIT HV-G92 Gamepad",
      price: 120,
      oldPrice: 160,
      discount: "-40%",
      image: "/src/assets/img/Cart (1).png",
      rating: 88,
    },
    {
      name: "AK-900 Wired Keyboard",
      price: 960,
      oldPrice: 1160,
      discount: "-35%",
      image: "/src/assets/img/Cart (10).png",
      rating: 75,
    },
    {
      name: "IPS LCD Gaming Monitor",
      price: 370,
      oldPrice: 400,
      discount: "-30%",
      image: "/src/assets/img/Cart (11).png",
      rating: 99,
    },
    {
      name: "RGB Liquid CPU Cooler",
      price: 160,
      oldPrice: 170,
      discount: "",
      image: "/src/assets/img/Cart (12).png",
      rating: 65,
    },
  ];

  return (
    <div className="container mx-auto p-6">
      {/* Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Product Images */}
        <div>
          <div className="flex space-x-4">
            <div className="flex flex-col space-y-4">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="Thumbnail"
                  className="w-full h-full border rounded-lg cursor-pointer hover:border-blue-500"
                  onClick={() => (img)}
                />
              ))}
            </div>
            <img
              src="/src/assets/img/Frame 894.png"
              alt="Main Product"
              className="w-90 h-100 rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>

        {/* Right: Product Info */}
        <div>
          <h1 className="text-2xl font-bold">Havic HV G-92 Gamepad</h1>
          <p className="text-gray-500">
            (150 Reviews) <span className="text-green-500">| In Stock</span>
          </p>
          <p className="text-2xl font-semibold my-2">$192.00</p>
          <p className="text-gray-600">
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal.
          </p>

          {/* Colour Selection */}
          <div className="my-4">
            <h3 className="font-semibold">Colours:</h3>
            <div className="flex space-x-2">
              <span className="w-6 h-6 bg-gray-800 rounded-full border"></span>
              <span className="w-6 h-6 bg-red-500 rounded-full border"></span>
            </div>
          </div>

          {/* Size Selection */}
          <div className="my-4">
            <h3 className="font-semibold">Size:</h3>
            <div className="flex space-x-2">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className="border px-3 py-1 rounded hover:bg-gray-200 transition"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + Cart Button */}
          <div className="flex items-center space-x-4 my-4">
            <div className="flex border rounded overflow-hidden">
              <button className="px-3 py-2 bg-gray-200">-</button>
              <span className="px-4 py-2">2</span>
              <button className="px-3 py-2 bg-gray-200">+</button>
            </div>
            <button className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600 transition">
              Buy Now
            </button>
            <button className="border px-4 py-3 rounded hover:bg-gray-100 transition">
              ❤️
            </button>
          </div>

          {/* Delivery & Returns */}
          <div className="border p-4 mt-4 rounded-lg">
            <p className="flex items-center space-x-2">
              🚚 <span>Free Delivery</span>{" "}
              <a href="#" className="text-blue-500">
                Enter your postal code
              </a>
            </p>
            <p className="flex items-center space-x-2 mt-2">
              🔄 <span>Return Delivery</span>{" "}
              <a href="#" className="text-blue-500">
                30 Days Return
              </a>
            </p>
          </div>
        </div>
      </div>
      

      {/* Related Products Section */}
      <div className="mt-12">
        <h2 className="text-xl font-bold text-red-500 mb-10">Related Items</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {relatedItems.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-lg p-4 relative hover:shadow-xl transition group overflow-hidden"
            >
              {item.discount && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded z-10">
                  {item.discount}
                </span>
              )}
              <div className="relative">
                <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-32 object-contain" />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white text-black font-medium py-2 px-4 rounded-md hover:bg-red-500 hover:text-white transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
                    Add to Cart
                  </button>
                </div>
              </div>
              <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
              <p className="text-red-500 text-lg font-bold">
                ${item.price} {item.oldPrice && <span className="text-gray-400 line-through">${item.oldPrice}</span>}
              </p>
              <p className="text-yellow-500 text-sm">⭐⭐⭐⭐⭐ ({item.rating})</p>
            </div>
          ))}
        </div>
        </div>
    </div>
  );
}

export default Details;
