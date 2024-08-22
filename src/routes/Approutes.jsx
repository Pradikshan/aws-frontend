import { Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import Features from "../views/Features";
import Pricing from "../views/Pricing";
import About from "../views/About";
import Support from "../views/Support";

export const Approutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/features" element={<Features />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/about" element={<About />} />
      <Route path="/support" element={<Support />} />
    </Routes>
  );
};
