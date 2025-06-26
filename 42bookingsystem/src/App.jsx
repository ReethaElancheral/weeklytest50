

import './App.css'


import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Booking from "./pages/BookingPage";
import Admin from "./pages/AdminPage";

export default function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <h1>📅 Booking System</h1>
        <div className="nav-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Book Appointment
          </NavLink>
          <NavLink
            to="/admin"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Admin Panel
          </NavLink>
        </div>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Booking />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

