import { NavLink } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";

const activeStyles = "text-black";
const inactiveStyles = "text-white";
export const NavBar = () => {
  return (
    <nav className="flex items-center gap-4">
      <NavLink
        to={"/login"}
        className={({ isActive }) =>
          `${isActive ? activeStyles : inactiveStyles}`
        }
      >
        {" "}
        <div className="flex justify-center items-center gap-1">
          <FaRegUserCircle />
          <span>Login</span>
        </div>
      </NavLink>
      <NavLink
        to={"/signup"}
        className={({ isActive }) =>
          `${isActive ? activeStyles : inactiveStyles}`
        }
      >
        Signup
      </NavLink>
    </nav>
  );
};
