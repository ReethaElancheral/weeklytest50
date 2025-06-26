import { useState } from 'react'

import './App.css'
import Translator from "./components/Translator";

export default function App() {
  return (
    <div className="app-container">
      <h1>🌐 Multi-language Translator</h1>
      <Translator />
    </div>
  );
}
