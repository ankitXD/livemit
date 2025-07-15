import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/user.routes.js";
import db from "./db/db.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173", 
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Accept"],
    exposedHeaders: ["Set-Cookie", "*"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  console.log("=== Cookie Debug ===");
  console.log("Request cookies:", req.cookies);
  console.log("Request headers:", {
    cookie: req.headers.cookie,
    origin: req.headers.origin,
  });

  res.json({
    message: "Hello World",
    cookies: req.cookies,
  });
});

app.use("/api/v1/users", userRoutes);

db();

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
