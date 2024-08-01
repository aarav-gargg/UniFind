import express from "express";
import cors from "cors";
import Ipurouter from "./routes/predictor.routes.js";
// import cookieParser from "cookie-parser"

const app = express();

// Set up CORS before defining routes
app.use(cors({
    origin: process.env.CORS_ORIGIN , // Default to '*' if CORS_ORIGIN is not set
    credentials: true
}));

// Parse incoming requests with JSON payloads
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: 'true', limit: "16kb" }));

// Routes
app.use('/api', Ipurouter);

// app.use(express.static("public")) // Uncomment if you serve static files

export { app };
