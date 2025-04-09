import React from "react";
import { Link } from "react-router-dom";

function Login() {
  
  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-50">
      {/* Left side with image */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <img
          src="/src/assets/img/dl.beatsnoop 1.png"
          alt="Shopping cart with smartphone and shopping bags"
          className="w-full max-w-xl object-contain"
        />
      </div>

      {/* Right side with form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold mb-2">Log in to Exclusive</h1>
          <p className="text-gray-600 mb-8">Enter your details below</p>

          <form className="space-y-6">
            {/* Email/Phone */}
            <div>
              <input
                type="text"
                placeholder="Email or Phone Number"
                className="w-full px-4 py-3 border-b border-gray-300 focus:border-gray-400 outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 border-b border-gray-300 focus:border-gray-400 outline-none"
              />
            </div>

            {/* Forgot password and login button row */}
            <div className="flex items-center justify-between">
<Link to={""}>
                <button
                  type="submit"
                  className="bg-red-500 text-white py-2 px-8 rounded hover:bg-red-600 transition duration-300"
                  >
                  Log in
                </button>
                </Link>

              <h1 className="text-red-500 hover:underline">Forgot Password?</h1>
            </div>
          </form>

          <div className="text-center mt-8">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <a href="/register" className="text-red-500 hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
