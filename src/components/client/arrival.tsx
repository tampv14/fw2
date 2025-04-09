import React from 'react'

const Arrival = () => {
  return (
    <div>
      <div className="my-12">
        <div className="flex items-center mb-4">
          <div className="w-1 h-10 bg-red-500 mr-3"></div>
          <span className="text-red-500 font-medium">Featured</span>
        </div>
        <h2 className="text-2xl font-bold mb-6">New Arrival</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4"></div>
      </div>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* PlayStation 5 Section */}
          <div className="relative bg-black text-white overflow-hidden group">
            <div className="relative h-[600px] transition-transform duration-700 transform group-hover:scale-105">
              <img
                src="/src/assets/img/Frame 684.png"
                alt="PlayStation 5"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
              <h2 className="text-4xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                PlayStation 5
              </h2>
              <p className="text-sm mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                Experience next-generation gaming with the PS5
              </p>
              <button className="bg-white text-black py-2 px-4 rounded-md w-max transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200 hover:bg-red-500 hover:text-white">
                Shop Now
              </button>
            </div>
          </div>

          {/* Right Side Sections */}
          <div className="grid grid-cols-2 gap-4">
            {/* Top Wide Section */}
            <div className="relative bg-gray-900 text-white overflow-hidden group col-span-2">
              <div className="relative h-[250px] transition-transform duration-700 transform group-hover:scale-105">
                <img
                  src="/src/assets/img/Frame 685.png"
                  alt="Perfume Collection"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <h2 className="text-xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  Luxury Perfumes
                </h2>
                <p className="text-xs mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  Discover our exclusive fragrance collection
                </p>
                <button className="bg-white text-black py-2 px-4 rounded-md w-max transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200 hover:bg-red-500 hover:text-white text-sm">
                  Shop Now
                </button>
              </div>
            </div>

            {/* Women's Collections */}
            <div className="relative bg-gray-900 text-white overflow-hidden group">
              <div className="relative h-[200px] transition-transform duration-700 transform group-hover:scale-105">
                <img
                  src="/src/assets/img/Frame 686.png"
                  alt="Women's Collections"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
                <h2 className="text-lg font-bold mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  Women's Fashion
                </h2>
                <p className="text-xs mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  Trendy styles for every occasion
                </p>
                <button className="bg-white text-black py-1.5 px-3 rounded-md w-max transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200 hover:bg-red-500 hover:text-white text-xs">
                  Shop Now
                </button>
              </div>
            </div>

            {/* Speakers */}
            <div className="relative bg-gray-800 text-white overflow-hidden group">
              <div className="relative h-[180px] transition-transform duration-700 transform group-hover:scale-105">
                <img
                  src="/src/assets/img/Frame 687.png"
                  alt="Speakers"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
                <h2 className="text-lg font-bold mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  Premium Speakers
                </h2>
                <p className="text-xs mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  Immersive sound experience
                </p>
                <button className="bg-white text-black py-1.5 px-3 rounded-md w-max transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200 hover:bg-red-500 hover:text-white text-xs">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Arrival
