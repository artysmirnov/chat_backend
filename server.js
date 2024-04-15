import dotenv from "dotenv"
import express from "express"

import authRoutes from "./routes/authRoutes.js"
import messageRoutes from "./routes/messageRoutes.js"
import userRoutes from "./routes/userRoutes.js"

import connectToMongo from "./db/connectToMongo.js"
import { app, server } from "./socket/socket.js"

import cookieParser from "cookie-parser"

const PORT = process.env.PORT || 5000

dotenv.config()

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)

server.listen(PORT, () => {
	connectToMongo()
	console.log(`server running on ${PORT}`)
})
