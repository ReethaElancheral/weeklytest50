import { WebSocketServer } from "ws";
import http from "http";


const PORT = process.env.PORT || 5000;


const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("WebSocket server is running");
});


const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
  ws.on("message", (data) => {
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === 1) {
        client.send(data.toString());
      }
    });
  });
});

server.listen(PORT, () => {
  console.log(`✅ WebSocket server running at port ${PORT}`);
});
