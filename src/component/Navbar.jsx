import { useContext } from "react";
import { FaBook, FaHome, FaSignInAlt, FaSignOutAlt, FaUserPlus } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../component/autoauth.jsx";
function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  function handleLogout() {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  }

  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b-2 border-amber-500 bg-gradient-to-r from-amber-400 to-amber-500 shadow-lg">
      <Link to="/" className="flex items-center space-x-2 text-white font-bold text-xl hover:text-amber-100 transition-colors">
        <FaBook className="text-2xl" />
        <span>Khatabook</span>
      </Link>

      <div className="flex items-center space-x-6">
        {!isLoggedIn ? (
          <>
            <Link
              to="/login"
             className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors font-medium ${location.pathname === '/login' ? 'bg-amber-600 text-white' : 'bg-white text-amber-600 hover:bg-amber-100'}`}
            >
              <FaSignInAlt />
              <span>Login</span>
            </Link>
            <Link
              to="/signup"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors font-medium ${location.pathname === '/signup' ? 'bg-amber-600 text-white' : 'bg-white text-amber-600 hover:bg-amber-100'}`}
            >
              <FaUserPlus />
              <span>Signup</span>
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/"
              className="flex items-center space-x-2 text-white hover:text-amber-100 transition-colors font-medium"
            >
              <FaHome />
              <span>Home</span>
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors font-medium"
            >
              <FaSignOutAlt />
              <span>Logout</span>
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
