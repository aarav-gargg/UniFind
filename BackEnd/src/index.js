import dotenv from 'dotenv';
// import connectDB from "./db/index.js";
import { app } from './app.js';
import { ipuPredictor } from './controller/predictor.controller.js';

dotenv.config({
  path: './.env',
});

// app.get('/', ipuPredictor);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});