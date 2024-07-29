import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

export const FormLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Dados de Login:", { username, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 bg-white shadow-md rounded-lg"
      >
        <h1 className="text-3xl font-bold mb-6 text-slate-600">Login</h1>

        <div className="relative mb-4">
          <input
            type="text"
            placeholder="E-mail"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 pr-10 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-600"
          />
          <FaUser className="absolute top-1/2 right-3 transform -translate-y-1/2 text-slate-400" />
        </div>

        <div className="relative mb-6">
          <input
            type="password"
            placeholder="Senha"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 pr-10 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-600"
          />
          <FaLock className="absolute top-1/2 right-3 transform -translate-y-1/2 text-slate-400" />
        </div>

        <div className="flex items-center justify-between mb-6">
          <label className="flex items-center text-slate-600">
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-slate-600 text-white px-4 py-2 rounded-lg hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-600"
        >
          Login
        </button>

        <div className="mt-6 text-center text-slate-600">
          <p>
            Don't have an account?{" "}
            <Link
              to={"/signup"}
              className="text-slate-600 hover:text-slate-800 underline"
            >
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};
