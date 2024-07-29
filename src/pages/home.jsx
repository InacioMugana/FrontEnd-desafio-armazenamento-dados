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
            Welcome to the student management page
          </h1>
          <p className="text-gray-700 mb-4">
            We use information and communication technologies to improve
            management and the learning experience, as management systems
            (SGEs), distance learning platforms (EAD) and educational data
            analysis tools.
          </p>
          <p>
            <Link
              to={"/login"}
              className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
            >
              Enter
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
