import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';

dotenv.config()
const PORT = process.env.PORT

const app = express()

app.use(cookieParser())
app.use(express.json())
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));

mongoose.connect(process.env.MONGODB_CONN, {dbName:'mern-blogproject'})
  .then(() => console.log('Database connected.'))
  .catch(err => console.log('Database connection failed.', err))
  
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500
  const message = err.message || 'Internam server error'
  res.status(statusCode).json({
    success: false,
    statusCode,
    message
  })
  })


app.listen(PORT, () => {
  console.log('server is running on port :', PORT)
})
