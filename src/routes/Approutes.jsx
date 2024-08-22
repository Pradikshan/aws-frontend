import Home from "../views/Home";
import { Routes, Route } from "react-router-dom";

export const Approutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
