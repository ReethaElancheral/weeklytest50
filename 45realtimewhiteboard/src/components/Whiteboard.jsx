import React, { useEffect, useRef, useState } from "react";

const WS_URL = "ws://localhost:5000"; 

export default function Whiteboard() {
  const canvasRef = useRef(null);
  const wsRef = useRef(null);
  const ctxRef = useRef(null);

  const [color, setColor] = useState("#000000");
  const [lineWidth, setLineWidth] = useState(4);
  const [isEraser, setIsEraser] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 });


  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 0.9;
    canvas.height = window.innerHeight * 0.7;
    const ctx = canvas.getContext("2d");
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctxRef.current = ctx;

  
    wsRef.current = new WebSocket(WS_URL);
    wsRef.current.onopen = () => console.log("WebSocket connected");
    wsRef.current.onmessage = (msg) => {
      const data = JSON.parse(msg.data);
      if (data.type === "draw") {
        drawLine(data.from, data.to, data.color, data.lineWidth, false);
      } else if (data.type === "clear") {
        clearCanvas(false);
      }
    };
    wsRef.current.onerror = (e) => console.error("WebSocket error:", e);

    
    return () => {
      wsRef.current.close();
    };
  }, []);


  useEffect(() => {
    if (ctxRef.current) {
      ctxRef.current.strokeStyle = isEraser ? "#ffffff" : color;
      ctxRef.current.lineWidth = lineWidth;
    }
  }, [color, lineWidth, isEraser]);

 
  function drawLine(from, to, strokeColor, strokeWidth, emit = true) {
    const ctx = ctxRef.current;
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = strokeWidth;

    ctx.beginPath();
    ctx.moveTo(from.x, from.y);
    ctx.lineTo(to.x, to.y);
    ctx.stroke();

   
    ctx.strokeStyle = isEraser ? "#ffffff" : color;
    ctx.lineWidth = lineWidth;

    if (!emit) return;

  
    if (wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(
        JSON.stringify({
          type: "draw",
          from,
          to,
          color: strokeColor,
          lineWidth: strokeWidth,
        })
      );
    }
  }

  
  function clearCanvas(emit = true) {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (emit && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify({ type: "clear" }));
    }
  }

 
  function handleMouseDown(e) {
    setIsDrawing(true);
    const rect = canvasRef.current.getBoundingClientRect();
    setLastPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }

  function handleMouseMove(e) {
    if (!isDrawing) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const currentPos = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    drawLine(lastPos, currentPos, isEraser ? "#ffffff" : color, lineWidth);
    setLastPos(currentPos);
  }

  function handleMouseUp() {
    setIsDrawing(false);
  }

  function handleTouchStart(e) {
    e.preventDefault();
    if (e.touches.length !== 1) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    setIsDrawing(true);
    setLastPos({ x: touch.clientX - rect.left, y: touch.clientY - rect.top });
  }

  function handleTouchMove(e) {
    e.preventDefault();
    if (!isDrawing || e.touches.length !== 1) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const currentPos = { x: touch.clientX - rect.left, y: touch.clientY - rect.top };
    drawLine(lastPos, currentPos, isEraser ? "#ffffff" : color, lineWidth);
    setLastPos(currentPos);
  }

  function handleTouchEnd(e) {
    e.preventDefault();
    setIsDrawing(false);
  }

  return (
    <div className="whiteboard-container">
      <div className="toolbar">
        <label>
          Color:{" "}
          <input
            type="color"
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
              setIsEraser(false);
            }}
          />
        </label>

        <label>
          Thickness:{" "}
          <select
            value={lineWidth}
            onChange={(e) => setLineWidth(parseInt(e.target.value, 10))}
          >
            <option value={2}>Thin</option>
            <option value={4}>Medium</option>
            <option value={8}>Thick</option>
          </select>
        </label>

        <button
          onClick={() => setIsEraser(!isEraser)}
          className={isEraser ? "active" : ""}
        >
          {isEraser ? "Eraser On" : "Eraser Off"}
        </button>

        <button onClick={() => clearCanvas(true)}>Clear Board</button>
      </div>

      <canvas
        ref={canvasRef}
        className="whiteboard-canvas"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      />
    </div>
  );
}
