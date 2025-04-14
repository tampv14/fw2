import React from "react";
import { useForm } from "react-hook-form";
import { IRegister } from "../../interface/users";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../../config/axios";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IRegister>();
  const queryclient = useQueryClient();
  const nav = useNavigate();
  const mutation = useMutation({
    mutationFn: async (auth: IRegister) => {
      try {
        const { comfirmPassword, ...payload } = auth;
        const { data } = await api.post("register", payload);
        return data;
      } catch (error) {
        throw new Error("Tai khoan da ton tai");
      }
    },
    onSuccess: (res) => {
      message.success("Dang ky thanh cong");
      queryclient.invalidateQueries({ queryKey: ["auth"] });
      console.log(res);
      nav("/login");
    },
    onError: (errors: any) => {
      message.error("Tai khoan da ton tai");
      console.log(errors);
    },
  });
  const onsubmit = (auth: IRegister) => {
    mutation.mutate(auth);
  };
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

          <form onSubmit={handleSubmit(onsubmit)} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 border-b border-gray-300 focus:border-gray-400 outline-none"
                id="name"
                {...register("name", {
                  required: "Khong duoc bo trong",
                  minLength: {
                    value: 5,
                    message: "Toi thieu 5 ky tu",
                  },
                })}
              />
              {errors.name?.message && (
                <span className="text-red-500">{errors?.name?.message}</span>
              )}
            </div>
            <div>
              <input
                type="email"
                placeholder="Email or Phone Number"
                className="w-full px-4 py-3 border-b border-gray-300 focus:border-gray-400 outline-none"
                id="email"
                {...register("email", {
                  required: "Khong duoc bo trong",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Khong dung dinh dang email",
                  },
                })}
              />
              {errors.email?.message && (
                <span className="text-red-500">{errors?.email?.message}</span>
              )}
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 border-b border-gray-300 focus:border-gray-400 outline-none"
                id="password"
                {...register("password", {
                  required: "Khong duoc bo trong",
                  minLength: {
                    value: 6,
                    message: "Toi thieu 6 ky tu",
                  },
                })}
              />
              {errors.password?.message && (
                <span className="text-red-500">
                  {errors?.password?.message}
                </span>
              )}
            </div>
            <div>
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full px-4 py-3 border-b border-gray-300 focus:border-gray-400 outline-none"
                id="ConfirmPassword"
                {...register("comfirmPassword", {
                  required: "Khong duoc bo trong",
                  validate: (value) => {
                    return value == watch("password") || "Khong trung khop";
                  },
                })}
              />
              {errors.comfirmPassword?.message && (
                <span className="text-red-500">
                  {errors?.comfirmPassword?.message}
                </span>
              )}
            </div>
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
