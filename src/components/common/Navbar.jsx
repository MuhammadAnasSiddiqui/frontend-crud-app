import { NavLink, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { isAuthenticated } = useAuthContext();

  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("User logged out");
    navigate("/");
  };

  const activeClass = "text-white underline";
  const inactiveClass = "text-gray-300 hover:text-white";

  return (
    <nav className="bg-gray-800 px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <div
        className="text-white font-bold text-xl cursor-pointer"
        onClick={() => navigate("/")}
      >
        MyLogo
      </div>

      {/* Navigation Links */}
      <div className="flex items-center space-x-6">
        {!isAuthenticated ? (
          <>
            <NavLink
              to="/auth/login"
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/auth/signup"
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
            >
              Signup
            </NavLink>
          </>
        ) : (
          <>
            <NavLink
              to="/user/profile"
              className={({ isActive }) =>
                isActive ? activeClass : inactiveClass
              }
            >
              Profile
            </NavLink>
            <button
              onClick={handleLogout}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
