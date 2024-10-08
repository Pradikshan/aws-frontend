import { Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import Features from "../views/Features";
import Pricing from "../views/Pricing";
import About from "../views/About";
import Support from "../views/Support";
import Artists from "../views/Artists";
import Albums from "../views/Albums";
import Songs from "../views/Songs";
import Login from "../views/Login";
import SignUp from "../views/SignUp";
import ProtectedRoute from "../components/ProtectedRoute";
import Profile from "../views/Profile";

export const Approutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/features" element={<Features />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/about" element={<About />} />
      <Route path="/support" element={<Support />} />
      <Route
        path="/artists"
        element={
          <ProtectedRoute>
            <Artists />
          </ProtectedRoute>
        }
      />
      <Route
        path="/albums"
        element={
          <ProtectedRoute>
            <Albums />
          </ProtectedRoute>
        }
      />
      <Route
        path="/songs"
        element={
          <ProtectedRoute>
            <Songs />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};
