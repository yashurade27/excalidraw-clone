import { WebSocketServer } from 'ws';

const PORT = process.env.PORT || 8080;
const wss = new WebSocketServer({ port: Number(PORT) });

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        console.log(`Received message: ${message}`);
        ws.send(`Echo: ${message}`);
    });

    ws.send('Hello from WebSocket Backend!');
});

console.log(`WebSocket Backend is running on port ${PORT}`);