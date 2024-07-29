import React from "react";
import { Header } from "../components/header";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <Header />
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-4">
            Bem-vindo à pagina de gestão de estudante
          </h1>
          <p className="text-gray-700 mb-4">
            Utilizamos tecnologias da informação e comunicação para melhorar a
            gestão e a experiência de aprendizagem, como sistemas de gestão
            escolar (SGEs), plataformas de ensino à distância (EAD) e
            ferramentas de análise de dados educacionais.
          </p>
          <p>
            <Link
              to={"/login"}
              className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
            >
              Entrar
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
