import express from 'express'

import path from 'path'
import { fileURLToPath } from 'url'
// import { products } from './adminrouter.js'
import { userController } from '../controllers/user.controller.js'

let __fileName = fileURLToPath(import.meta.url)

let __dirname = path.dirname(__fileName)
let router = express.Router()

router.get('/',  userController)

export default router


  //   res.send(`
    //       <h1>welcome to products page</h1>
    //     `);
    
    // res.sendFile(path.join(__dirname ,'../views/shop.html'))