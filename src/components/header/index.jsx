import { Link } from "react-router-dom";
import { NavBar } from "./navBar";

export const Header = () => {
  return (
    <header className="flex items-center justify-between bg-slate-600 text-white px-8 h-20 text-lg">
      <h1 className="text-white hover:text-black transition-all duration-500 ease-in-out">
        <Link to={"/"}>HOME</Link>
      </h1>
      <NavBar />
    </header>
  );
};
