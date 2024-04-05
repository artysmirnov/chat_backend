import dotenv from "dotenv";
import express from "express";

import authRoutes from "./routes/authRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import connectToMongo from "./db/connectToMongo.js";

import cookieParser from "cookie-parser";

const PORT = process.env.PORT || 5000;

dotenv.config();

const app = express();

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.listen(PORT, () => {
  connectToMongo();
  console.log(`server running on ${PORT}`);
});
