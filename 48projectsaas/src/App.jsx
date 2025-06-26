
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import Dashboard from "./pages/Dashboard";
import Teams from "./pages/Teams";
import Tasks from "./pages/Tasks";
import Admin from "./pages/Admin";

import { NotificationProvider } from "./data/dummyData.jsx";
import Notification from "./components/Notifications";

export default function App() {
  return (
    <BrowserRouter>
      <NotificationProvider>
        <div className="app-layout">
          <Sidebar />
          <div className="main-content">
            <Header />
            <Notification />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </div>
        </div>
      </NotificationProvider>
    </BrowserRouter>
  );
}
