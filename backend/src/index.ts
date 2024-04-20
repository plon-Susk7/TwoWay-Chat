import express from 'express';
import dotenv from 'dotenv';
import WebSocket,{WebSocketServer} from 'ws';
import http from 'http';

dotenv.config();

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({server});


const port = process.env.PORT || 5000;

wss.on('connection',(ws:WebSocket)=>{
    
    ws.on('error',(err:Error)=>{console.log(err)});

    ws.on('message',(message:String)=>{
        console.log(`[server]: Received message => ${message}`);
    })

    ws.send('Hello World! Welcome to the websocket server');
})

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.listen(port,()=>{
    console.log(`[server]: Server is running on port http://localhost:${port}`);
})