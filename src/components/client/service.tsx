import React from 'react'

const Service = () => {
  return (
    <div className="my-20 border-t pt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1: Free and Fast Delivery */}
          <div className="flex flex-col items-center text-center">
            <div className="h-16 w-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">FREE AND FAST DELIVERY</h3>
            <p className="text-gray-500 text-sm">
              Free delivery for all orders over $140
            </p>
          </div>

          {/* Feature 2: 24/7 Customer Service */}
          <div className="flex flex-col items-center text-center">
            <div className="h-16 w-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">24/7 CUSTOMER SERVICE</h3>
            <p className="text-gray-500 text-sm">
              Friendly 24/7 customer support
            </p>
          </div>

          {/* Feature 3: Money Back Guarantee */}
          <div className="flex flex-col items-center text-center">
            <div className="h-16 w-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <h3 className="font-bold text-lg mb-2">MONEY BACK GUARANTEE</h3>
            <p className="text-gray-500 text-sm">
              We return money within 30 days
            </p>
          </div>
        </div>
      </div>
  )
}

export default Service
