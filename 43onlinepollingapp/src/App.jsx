import { useState } from 'react'

import './App.css'

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import PollPage from "./pages/PollPage";

export default function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <h1>🗳️ Online Polling App</h1>
        <div className="nav-links">
          <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>
            Home
          </NavLink>
        </div>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/polls/:id" element={<PollPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

