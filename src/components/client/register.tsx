import React from "react";

function Register() {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-50">
      {/* Left side with larger image */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <img
          src="/src/assets/img/dl.beatsnoop 1.png"
          alt="Shopping cart with smartphone and shopping bags"
          className="w-full max-w-xl object-contain"
        />
      </div>

      {/* Right side with form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold mb-2">Create an Account</h1>
          <p className="text-gray-600 mb-8">Enter your details below</p>

          <form className="space-y-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 border-b border-gray-300 focus:border-gray-400 outline-none"
            />
            <input
              type="email"
              placeholder="Email or Phone Number"
              className="w-full px-4 py-3 border-b border-gray-300 focus:border-gray-400 outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border-b border-gray-300 focus:border-gray-400 outline-none"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-3 border-b border-gray-300 focus:border-gray-400 outline-none"
            />

            <button
              type="submit"
              className="w-full bg-red-500 text-white py-3 rounded hover:bg-red-600 transition duration-300"
            >
              Create Account
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-gray-600">
              Already have an account?{" "}
              <a href="/login" className="text-red-500 hover:underline">
                Log innn
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
