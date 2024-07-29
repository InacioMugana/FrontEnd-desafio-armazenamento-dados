import React from "react";
import { useForm } from "react-hook-form";
import { Header } from "../components/header";
import { Link } from "react-router-dom";

export const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Header />

      <div className="flex items-center justify-center min-h-screen bg-slate-50">
        <div className="w-full max-w-md p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-slate-600">Register</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="nome"
                className="block text-slate-600 font-medium"
              >
                Full Name:
              </label>
              <input
                type="text"
                id="name"
                {...register("name", {
                  required: "Name is required!",
                })}
                placeholder="Name"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-600"
              />
              {errors.nome && (
                <p className="text-red-500 text-sm">{errors.nome.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-slate-600 font-medium"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required!",
                })}
                placeholder="Email"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-600"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-slate-600 font-medium"
              >
                password:
              </label>
              <input
                type="password"
                id="password"
                {...register("password", {
                  required: "password is required!",
                })}
                placeholder="password"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-600"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="confirmarPassword"
                className="block text-slate-600 font-medium"
              >
                Password Confirmation:
              </label>
              <input
                type="password"
                id="confirmarPassword"
                {...register("confirmarPassword", {
                  required: "Password Confirmation is required!",
                })}
                placeholder="Password Confirmation"
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-600"
              />
              {errors.confirmarPassword && (
                <p className="text-red-500 text-sm">
                  {errors.confirmarPassword.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-slate-600 text-white px-4 py-2 rounded-lg hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-600"
            >
              Send
            </button>
            <div className="mt-6 text-center text-slate-600">
              <p>
                Already User?{" "}
                <Link
                  to={"/login"}
                  className="text-slate-600 hover:text-slate-800 underline mr-1"
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
