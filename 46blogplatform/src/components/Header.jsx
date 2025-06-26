import { Link } from "react-router-dom";
import { useState } from "react";

export function Header() {
  const [dark, setDark] = useState(false);

  return (
    <header>
      <h1> Blog</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
        
      </nav>
    </header>
  );
}