import { NavLink } from "react-router-dom";

const activeStyles = "text-black";
const inactiveStyles = "text-white";
export const NavBar = () => {
  return (
    <nav className="space-x-2">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          `${isActive ? activeStyles : inactiveStyles}`
        }
      >
        HOME
      </NavLink>
      <NavLink
        to={"/login"}
        className={({ isActive }) =>
          `${isActive ? activeStyles : inactiveStyles}`
        }
      >
        Login
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
