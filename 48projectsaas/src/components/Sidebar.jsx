import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <nav className="sidebar">
    
      <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Dashboard</NavLink>
      <NavLink to="/teams" className={({ isActive }) => isActive ? "active" : ""}>Teams</NavLink>
      <NavLink to="/tasks" className={({ isActive }) => isActive ? "active" : ""}>Tasks</NavLink>
      <NavLink to="/admin" className={({ isActive }) => isActive ? "active" : ""}>Admin</NavLink>
    </nav>
  );
}
