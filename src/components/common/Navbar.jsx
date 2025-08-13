import { NavLink, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { isAuthenticated, logout } = useAuthContext();

  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("User logged out");
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-primary px-6 py-4 flex justify-between items-center shadow-card">
      {/* Logo */}
      <div
        className="text-neutral-white font-bold text-xl cursor-pointer hover:text-accent transition"
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
                isActive
                  ? "text-accent font-semibold"
                  : "text-white hover:text-accent transition"
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/auth/signup"
              className={({ isActive }) =>
                isActive
                  ? "text-accent font-semibold"
                  : "text-white hover:text-accent transition"
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
                isActive
                  ? "text-accent font-semibold"
                  : "text-white hover:text-accent transition"
              }
            >
              Profile
            </NavLink>
            <button
              onClick={handleLogout}
              className="text-white hover:text-accent transition focus:outline-none"
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
