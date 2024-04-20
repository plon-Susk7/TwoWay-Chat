import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;


app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.listen(port,()=>{
    console.log(`[server]: Server is running on port http://localhost:${port}`);
})