import { useState } from 'react'

import './App.css'

import Whiteboard from "./components/Whiteboard";

function App() {
  return (
    <div>
      <h1>🖊️ Real-Time Whiteboard</h1>
      <Whiteboard />
    </div>
  );
}

export default App;
