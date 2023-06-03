import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import connectDB from './config/db.js';
import products from './data/products.js';
import cors from 'cors'
import productRoutes from './routes/productRoutes.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js';

const port =process.env.PORT || 5000;

connectDB();
const app = express();


app.use(cors())
app.get('/',(req,res)=>{
    res.send('API is running')
})

app.use('/api/products',productRoutes)


app.use(notFound)
app.use(errorHandler)
app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})


