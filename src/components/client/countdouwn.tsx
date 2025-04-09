import React from 'react'

const Countdouwn = () => {
  return (
    <div className="bg-black text-white rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row items-center py-8 px-8 md:px-12">
            {/* Left Section: Text and Countdown */}
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <div className="flex items-center mb-4">
                <span className="text-green-500 font-medium">Categories</span>
              </div>
              <h2 className="text-4xl font-bold mb-2">Enhance Your</h2>
              <h2 className="text-4xl font-bold mb-6">Music Experience</h2>

              {/* Time Countdown */}
              <div className="flex space-x-4 mb-6">
                <div className="countdown-circle">
                  <span className="font-semibold">23</span>
                  <span>Hours</span>
                </div>
                <div className="countdown-circle">
                  <span className="font-semibold">05</span>
                  <span>Days</span>
                </div>
                <div className="countdown-circle">
                  <span className="font-semibold">59</span>
                  <span>Mins</span>
                </div>
                <div className="countdown-circle">
                  <span className="font-semibold">35</span>
                  <span>Secs</span>
                </div>
              </div>

              {/* Buy Now Button */}
              <button className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
                Buy Now!
              </button>
            </div>

            {/* Right Section: Speaker Image with Glow */}
            <div className="w-full md:w-1/2 flex justify-center items-center">
              <div className="relative w-100 h-100">
                <img
                  src="/src/assets/img/Frame 694.png"
                  alt="JBL Speaker"
                  className="w-full h-full object-contain glow-effect"
                />
              </div>
            </div>
          </div>
        </div>
  )
}

export default Countdouwn
