import express from 'express';
import connectDB from './db/connection.js';

const app = express();
const port = 3000;

connectDB();




app.listen(port, () =>{
    console.log("Server is listening to port :" + port);
})