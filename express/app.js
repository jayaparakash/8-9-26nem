import express from 'express'
import bodypraser from 'body-parser'
import adiminrouter from './routers/adminrouter.js'

import { fileURLToPath } from 'url'
import userrouter from './routers/userrouter.js'
import path from 'path'

let __fileName = fileURLToPath(import.meta.url)
let __dirname = path.dirname(__fileName)

let app = express()
let port = 5001;


app.use(bodypraser.urlencoded())
app.use(express.static(
    path.join(__dirname,'public')
))


app.use("/admin", adiminrouter)


app.use(userrouter)

app.use((req,res,next)=>{
    // res.send('<h1>404 not found page<h1>')
    // res.sendFile(path.join(__dirname,'./views/404data.html'))
        res.render('404.ejs',{pageTitle:'Error page'})
})

app.listen(port,()=>{
    console.log(`This server is running at prot ${port}`);
})

