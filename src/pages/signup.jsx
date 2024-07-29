import React from "react";
import { useForm } from "react-hook-form";
import { Header } from "../components/header";

export const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Adicione a lógica de submissão do formulário aqui
  };

  return (
    <>
      <Header />

      <div className="flex items-center justify-center min-h-screen bg-slate-50">
        <div className="w-full max-w-md p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-slate-600">Cadastro</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="nome"
                className="block text-slate-600 font-medium"
              >
                Nome Completo:
              </label>
              <input
                type="text"
                id="nome"
                {...register("nome", {
                  required: "O nome é obrigatório!",
                })}
                placeholder="Nome"
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
                  required: "O email é obrigatório!",
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
                Senha:
              </label>
              <input
                type="password"
                id="password"
                {...register("password", {
                  required: "A senha é obrigatória!",
                })}
                placeholder="Senha"
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
                Confirmar Senha:
              </label>
              <input
                type="password"
                id="confirmarPassword"
                {...register("confirmarPassword", {
                  required: "A confirmação da senha é obrigatória!",
                })}
                placeholder="Confirmar Senha"
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
              Enviar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
