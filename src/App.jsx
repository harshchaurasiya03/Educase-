import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Account from "./Pages/Account";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-95 bg-white min-h-screen p-6">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}