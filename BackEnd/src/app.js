import express, { Router } from "express";
import cors from "cors"
import Ipurouter from "./routes/predictor.routes.js";
// import cookieParser from "cookie-parser"
const app = express();


app.use('/api', Ipurouter);

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: 'true', limit: "16kb" }))
// app.use(express.static("public"))


export { app }