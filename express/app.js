import dns from 'node:dns';
// Configure DNS for MongoDB SRV lookup
dns.setServers(['8.8.8.8', '1.1.1.1']);
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

import express from 'express'
import bodypraser from 'body-parser'
import adiminrouter from './routers/adminrouter.js'

import { fileURLToPath } from 'url'
import userrouter from './routers/userrouter.js'
import path from 'path'
import { errorController } from './controllers/user.controller.js'


let __fileName = fileURLToPath(import.meta.url)
let __dirname = path.dirname(__fileName)

let app = express()
let port = 5001;


app.use(bodypraser.urlencoded({ extended: true }))
app.use(express.static(
    path.join(__dirname,'public')
))


app.use("/admin", adiminrouter)

app.use(userrouter)

app.use(errorController)


const startServer = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected successfully!");
        app.listen(port, () => {
            console.log(`Server running at port ${port}`);
        });
    } catch (error) {
        console.log("MongoDB connection failed!");
        console.log(error.message);
    }
};
startServer();