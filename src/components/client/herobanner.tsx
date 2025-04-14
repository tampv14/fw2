
const Herobanner = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 py-8">
        {/* Left: Categories */}
        <div className="w-full lg:w-1/4  rounded p-2">
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="#"
                className="text-black hover:underline flex justify-between items-center"
              >
                Women's Fashion <span>&rarr;</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black hover:underline flex justify-between items-center"
              >
                Men's Fashion <span>&rarr;</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black hover:underline flex justify-between items-center"
              >
                Electronics
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black hover:underline flex justify-between items-center"
              >
                Home & Lifestyle
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black hover:underline flex justify-between items-center"
              >
                Medicine
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black hover:underline flex justify-between items-center"
              >
                Sports & Outdoor
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black hover:underline flex justify-between items-center"
              >
                Baby's & Toys
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black hover:underline flex justify-between items-center"
              >
                Groceries & Pets
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-black hover:underline flex justify-between items-center"
              >
                Health & Beauty
              </a>
            </li>
          </ul>
        </div>
        {/* Right: Hero Banner */}
        <div className="w-full lg:w-3/4 bg-black text-white rounded-lg overflow-hidden relative">
          <div className="flex flex-col md:flex-row items-center h-full px-10 md:px-12 py-10">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <div className="flex items-center mb-4">
                <img
                  src="https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg"
                  alt="Apple Logo"
                  className="h-10 mr-4"
                />
                <span className="text-sm">iPhone 14 Series</span>
              </div>
              <h1 className="text-4xl font-bold mb-2">Up to 10%</h1>
              <h1 className="text-4xl font-bold mb-6">off Voucher</h1>
              <button className="flex items-center text-sm border-b border-white pb-1 hover:opacity-80 transition">
                Shop Now <span className="ml-2">&rarr;</span>
              </button>
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center">
              {/* Light Glow Effect */}
              <div className="relative w-100 h-100">
                {/* iPhone Image */}
                <img
                  src="/src/assets/img/hero_endframe__cvklg0xk3w6e_large 2.png"
                  alt="iPhone 14"
                  className="w-full h-full object-contain glow-effect"
                />
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            <button className="w-2 h-2 rounded-full bg-gray-500 transition-colors duration-300 hover:bg-red-400"></button>
            <button className="w-2 h-2 rounded-full bg-gray-500 transition-colors duration-300 hover:bg-red-400"></button>
            <button className="w-2 h-2 rounded-full bg-red-500 transition-colors duration-300 hover:bg-red-400"></button>
            <button className="w-2 h-2 rounded-full bg-gray-500 transition-colors duration-300 hover:bg-red-400"></button>
            <button className="w-2 h-2 rounded-full bg-gray-500 transition-colors duration-300 hover:bg-red-400"></button>
          </div>
        </div>
      </div>
  )
}

export default Herobanner