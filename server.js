import dotenv from "dotenv";
import express from "express";

import authRoutes from "./routes/authRoutes.js";
import connectToMongo from "./db/connectToMongo.js";

const PORT = process.env.PORT || 5000;

dotenv.config();

const app = express();

app.use(express.json())

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectToMongo();
  console.log(`server running on ${PORT}`);
});