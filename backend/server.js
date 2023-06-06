import {config} from 'dotenv';

import express from 'express';
import connectDB from './config/db.js';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
config();
const port =process.env.PORT || 5000;
const r = process.env.random;
console.log(r)
connectDB();

const app = express();
app.use(cookieParser());

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get('/',(req,res)=>{
    res.send('API is running')
})

app.use('/api/products',productRoutes)
app.use('/api/users', userRoutes);

app.use(notFound)
app.use(errorHandler)
app.listen(port,()=>{
    console.log(`server is running on ${port} ${r}`)
})


