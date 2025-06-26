import { useState } from 'react'

import './App.css'

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CourseDetail from "./pages/CourseDetail";

export default function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <h1>LMS Platform</h1>
        <Link to="/">Home</Link>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

