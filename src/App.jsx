// import FeaturedCard from "./components/FeaturedCard";
// import { Link, BrowserRouter as Router } from "react-router-dom";
// import { Approutes } from "./routes/Approutes";
// import Home from "./views/Home";
// import { Navbar } from "./components/Navbar";
// import Footer from "./components/Footer";
// import { AuthProvider, AuthContext } from "./AuthContext"; // Import AuthProvider
// import { useContext } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate

// import { Buffer } from "buffer";
// import process from "process";

// // Assign to window to make these globals available
// window.Buffer = Buffer;
// window.process = process;
// window.global = window;

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <>
//           <div className="fixed top-0 right-0 mt-5 mx-5">
//             <AuthButtons />{" "}
//           </div>
//           <Navbar />
//           <Approutes />
//           <Footer />
//         </>
//       </Router>
//     </AuthProvider>
//   );
// }

// function AuthButtons() {
//   const { user, username, email, logout } = useContext(AuthContext);
//   const navigate = useNavigate(); // Use useNavigate hook

//   const handleLogout = () => {
//     logout();
//     navigate("/");
//     document.location.reload();
//   };

//   return user ? (
//     <div className="flex items-center">
//       <span className="text-white mr-4">{username}</span>{" "}
//       <button
//         onClick={handleLogout} // Call handleLogout on click
//         className="p-4 text-white font-semibold bg-gradient-to-r from-red-500 to-orange-600 hover:bg-gradient-to-r hover:from-red-600 hover:to-orange-700 rounded-full mx-3 hover:scale-110 transition-all ease-in-out duration-500 text-sm"
//       >
//         Log Out
//       </button>
//     </div>
//   ) : (
//     <>
//       <Link to={"/signup"}>
//         <button className="p-4 text-white font-semibold bg-gradient-to-r from-pink-500 to-violet-600 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 rounded-full mx-3 hover:scale-110 transition-all ease-in-out duration-500 text-sm">
//           Sign Up
//         </button>
//       </Link>
//       <Link to={"/login"}>
//         <button className="p-4 text-white font-semibold bg-gradient-to-r from-pink-500 to-violet-600 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 rounded-full mx-3 hover:scale-110 transition-all ease-in-out duration-500 text-sm">
//           Log In
//         </button>
//       </Link>
//     </>
//   );
// }

// export default App;

// this worked so revrt back if new code does not work as expected
// import FeaturedCard from "./components/FeaturedCard";
// import { Link, BrowserRouter as Router } from "react-router-dom";
// import { Approutes } from "./routes/Approutes";
// import Home from "./views/Home";
// import { Navbar } from "./components/Navbar";
// import Footer from "./components/Footer";
// import { AuthProvider, AuthContext } from "./AuthContext"; // Import AuthProvider
// import { useContext } from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate

// import { Buffer } from "buffer";
// import process from "process";

// // Assign to window to make these globals available
// window.Buffer = Buffer;
// window.process = process;
// window.global = window;

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <>
//           <div className="fixed top-0 right-0 mt-5 mx-5">
//             <AuthButtons />
//           </div>
//           <Navbar />
//           <Approutes />
//           <Footer />
//         </>
//       </Router>
//     </AuthProvider>
//   );
// }

// function AuthButtons() {
//   const { user, username, logout } = useContext(AuthContext);
//   const navigate = useNavigate(); // Use useNavigate hook

//   const handleLogout = () => {
//     logout();
//     navigate("/");
//     document.location.reload();
//   };

//   return user ? (
//     <div className="flex items-center">
//       <span className="text-white mr-4">{username}</span>{" "}
//       {/* Display username */}
//       <button
//         onClick={handleLogout} // Call handleLogout on click
//         className="p-4 text-white font-semibold bg-gradient-to-r from-red-500 to-orange-600 hover:bg-gradient-to-r hover:from-red-600 hover:to-orange-700 rounded-full mx-3 hover:scale-110 transition-all ease-in-out duration-500 text-sm"
//       >
//         Log Out
//       </button>
//     </div>
//   ) : (
//     <>
//       <Link to={"/signup"}>
//         <button className="p-4 text-white font-semibold bg-gradient-to-r from-pink-500 to-violet-600 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 rounded-full mx-3 hover:scale-110 transition-all ease-in-out duration-500 text-sm">
//           Sign Up
//         </button>
//       </Link>
//       <Link to={"/login"}>
//         <button className="p-4 text-white font-semibold bg-gradient-to-r from-pink-500 to-violet-600 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 rounded-full mx-3 hover:scale-110 transition-all ease-in-out duration-500 text-sm">
//           Log In
//         </button>
//       </Link>
//     </>
//   );
// }

// export default App;

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

window.Buffer = Buffer;
window.process = process;
window.global = window;

function App() {
  return (
    <AuthProvider>
      <Router>
        <>
          {/* Navbar is now flex with buttons placed properly */}
          <div className="flex justify-between items-center fixed top-0 inset-x-0 mt-5 px-5 z-50">
            <Navbar />
            <AuthButtons /> {/* Adjusted positioning for buttons */}
          </div>
          <div className="pt-20">
            {" "}
            {/* Padding to avoid overlap */}
            <Approutes />
            <Footer />
          </div>
        </>
      </Router>
    </AuthProvider>
  );
}

function AuthButtons() {
  const { user, username, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
    document.location.reload();
  };

  return user ? (
    <div className="flex items-center space-x-3">
      <span className="hidden sm:inline text-white mr-4">{username}</span>{" "}
      <button
        onClick={handleLogout}
        className="p-2 sm:p-4 text-xs sm:text-sm text-white font-semibold bg-gradient-to-r from-red-500 to-orange-600 hover:bg-gradient-to-r hover:from-red-600 hover:to-orange-700 rounded-full mx-1 sm:mx-3 hover:scale-105 transition-all duration-300"
      >
        Log Out
      </button>
    </div>
  ) : (
    <div className="flex space-x-2 sm:space-x-3">
      <Link to={"/signup"}>
        <button className="nav-btn">Sign Up</button>
      </Link>
      <Link to={"/login"}>
        <button className="nav-btn">Log In</button>
      </Link>
    </div>
  );
}

export default App;
