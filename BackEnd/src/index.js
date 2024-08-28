// import dotenv from 'dotenv';
// import connectDB from "./db/index.js";
import { app } from './app.js';
import { ipuPredictor } from './controller/predictor.controller.js';
import mongoose from "mongoose"
import cookieParser from "cookie-parser"

// dotenv.config({
//   path: '../../.env',
// });

process.env.NODE_ENV = process.env.NODE_ENV || 'production';

if (process.env.NODE_ENV !== 'production') {
  import('dotenv').then((dotenv) => dotenv.config({
    path: '../../.env',
  }));
}

const mongo = process.env.MONGO_URL;

mongoose.connect(mongo)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(error => {
    console.log(error);
  });

// app.get('/', ipuPredictor);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});