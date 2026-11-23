import express from 'express'
import { UserController } from '../models/UserController.js'

let route = express.Router()

// http://localhost:8000/app/v1/user/createUser
export let userRouter = route.post('/createUser',UserController)

