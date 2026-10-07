import express from 'express'

import path from 'path'
import { fileURLToPath } from 'url'
import { products } from './adminrouter.js'

let __fileName = fileURLToPath(import.meta.url)

let __dirname = path.dirname(__fileName)
let router = express.Router()

router.get('/',(req,res,next)=>{
    //   res.send(`
    //       <h1>welcome to products page</h1>
    //     `);
    
    // res.sendFile(path.join(__dirname ,'../views/shop.html'))

    res.render('shop.ejs',{pros:products})

})

export default router