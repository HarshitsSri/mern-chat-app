import express from 'express'
import dotenv from 'dotenv'
import connectiondb from './config/database.js'
import userRouter from './routes/userRouter.js'
import messageRouter from './routes/messageRoute.js'
import cookieParser from "cookie-parser";

dotenv.config({})

const PORT = process.env.PORT || 5000
const app = express()
app.use(cookieParser());
app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/message",messageRouter);

const startserver = async () => {
    await connectiondb()
    app.listen(PORT, async () => {
        console.log(`Server is running in port: ${PORT}`)
    })

}
startserver()

