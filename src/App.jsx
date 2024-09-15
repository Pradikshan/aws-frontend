import FeaturedCard from "./components/FeaturedCard";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { Approutes } from "./routes/Approutes";
import Home from "./views/Home";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import { AuthProvider, AuthContext } from "./AuthContext"; // Import AuthProvider
import { useContext } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

import { Buffer } from "buffer";
import process from "process";

// Assign to window to make these globals available
window.Buffer = Buffer;
window.process = process;
window.global = window;

function App() {
  return (
    <AuthProvider>
      <Router>
        <>
          <div className="fixed top-0 right-0 mt-5 mx-5">
            <AuthButtons />{" "}
          </div>
          <Navbar />
          <Approutes />
          <Footer />
        </>
      </Router>
    </AuthProvider>
  );
}

function AuthButtons() {
  const { user, email, logout } = useContext(AuthContext);
  const navigate = useNavigate(); // Use useNavigate hook

  const handleLogout = () => {
    logout();
    navigate("/");
    document.location.reload();
  };

  return user ? (
    <div className="flex items-center">
      <span className="text-white mr-4">{email}</span>{" "}
      <button
        onClick={handleLogout} // Call handleLogout on click
        className="p-4 text-white font-semibold bg-gradient-to-r from-red-500 to-orange-600 hover:bg-gradient-to-r hover:from-red-600 hover:to-orange-700 rounded-full mx-3 hover:scale-110 transition-all ease-in-out duration-500 text-sm"
      >
        Log Out
      </button>
    </div>
  ) : (
    <>
      <Link to={"/signup"}>
        <button className="p-4 text-white font-semibold bg-gradient-to-r from-pink-500 to-violet-600 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 rounded-full mx-3 hover:scale-110 transition-all ease-in-out duration-500 text-sm">
          Sign Up
        </button>
      </Link>
      <Link to={"/login"}>
        <button className="p-4 text-white font-semibold bg-gradient-to-r from-pink-500 to-violet-600 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 rounded-full mx-3 hover:scale-110 transition-all ease-in-out duration-500 text-sm">
          Log In
        </button>
      </Link>
    </>
  );
}

export default App;
