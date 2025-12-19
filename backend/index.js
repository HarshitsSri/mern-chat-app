import express from 'express'
import dotenv from 'dotenv'
import connectiondb from './config/database.js'

dotenv.config({})

const PORT =process.env.PORT||5000
const app= express()

app.listen(PORT,async ()=>{
    await connectiondb()
    console.log(`Server is running in port: ${PORT}`)
})


