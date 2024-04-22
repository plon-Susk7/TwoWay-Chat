import express from 'express';
import dotenv from 'dotenv';
import WebSocket,{WebSocketServer} from 'ws';
import http from 'http';
import cors from 'cors';

dotenv.config();

const app = express();
const server = http.createServer(app);
// const wss = new WebSocketServer({ server });

app.use(cors());

const port = process.env.PORT || 5000;

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('error', console.error);

  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });

  ws.send('something');
});


app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.listen(port,()=>{
    console.log(`[server]: Server is running on port http://localhost:${port}`);
})

