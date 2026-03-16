import express from 'express';
import connectDB from './db/connection.js';
import router from './routes/productRoutes.js';


const app = express();
const port = 3000;

connectDB();

app.use(express.json());
app.use('/', router);


app.listen(port, () =>{
    console.log("Server is listening to port :" + port);
})