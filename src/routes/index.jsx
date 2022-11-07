import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Register from "../pages/Register";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default RoutesMain;
