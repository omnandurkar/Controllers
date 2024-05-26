import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const connectDB = async () => {
    mongoose.connect(process.env.MONGODB_URL);
    console.log("Database Connected");
}