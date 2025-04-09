import React from "react";

const ClientFooter = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Column 1: Exclusive */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold mb-4">Exclusive</h3>
          <div className="space-y-2">
            <h4 className="font-medium">Subscribe</h4>
            <p className="text-sm">Get 10% off your first order</p>
            <div className="flex mt-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border border-white px-3 py-2 text-sm outline-none"
              />
              <button className="bg-transparent border border-white border-l-0 px-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Column 2: Support */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold mb-4">Support</h3>
          <div className="space-y-2 text-sm">
            <p>111 Bijoy sarani, Dhaka,</p>
            <p>DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>
        </div>

        {/* Column 3: Account */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold mb-4">Account</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/account" className="hover:text-gray-300">
                My Account
              </a>
            </li>
            <li>
              <a href="/login" className="hover:text-gray-300">
                Login / Register
              </a>
            </li>
            <li>
              <a href="/cart" className="hover:text-gray-300">
                Cart
              </a>
            </li>
            <li>
              <a href="/wishlist" className="hover:text-gray-300">
                Wishlist
              </a>
            </li>
            <li>
              <a href="/shop" className="hover:text-gray-300">
                Shop
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Quick Link */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold mb-4">Quick Link</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/privacy" className="hover:text-gray-300">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-gray-300">
                Terms Of Use
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-gray-300">
                FAQ
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 5: Download App */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold mb-4">Download App</h3>
          <p className="text-xs text-gray-400">
            Save $3 with App New User Only
          </p>

          {/* QR Code and App Stores */}
          <div className="flex space-x-4">
            <div className="w-24 h-24 bg-white p-1">
              <img
                src="https://cdn.pixabay.com/photo/2013/07/12/14/45/qr-code-148732_1280.png"
                alt="QR Code"
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <a href="#" className="block">
                <img
                  src="/src/assets/img/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png"
                  alt="Google Play"
                  className="h-8"
                />
              </a>
              
              <a href="#" className="block">
                <img
                  src="/src/assets/img/download-appstore.png"
                  alt="App Store"
                  className="h-8"
                />
              </a>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" className="hover:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
            <a href="#" className="hover:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" className="hover:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-4 pt-8 mt-8 text-center text-gray-400 text-sm">
        <p>© Copyright Rimel 2022. All right reserved</p>
      </div>
    </footer>
  );
};

export default ClientFooter;
