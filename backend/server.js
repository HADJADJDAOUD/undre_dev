import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import { connectDb } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRouter.js';

import 'dotenv/config'; 
const app = express();
const PORT = 4000;
// middleware
app.use(express.json())
app.use(cors(
    {
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true,
    }
));
/// db connection
///////////
connectDb();
/////////////

/////////////


// routes


app.use('/api/food', foodRouter);
app.use("/images", express.static("uploads"))
app.use('/api/user', userRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);
// start server

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
 

 // https://localhost:4000/images/group1.png