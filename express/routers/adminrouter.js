import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
 let router = express.Router()

 let __fileName = fileURLToPath(import.meta.url)
 let __dirname = path.dirname(__fileName)

export let products = []
router.get('/productsdata',(req,res,next)=>{
//        res.send(` <form action="/admin/product" method="post">
//         <input type="text" name="name">
//         <button type="submit">submit</button>
//     </form>
//  `)
// res.sendFile(path.join(__dirname,'../views','admin.html'))
res.render('admin.ejs')
})

router.post('/product',(req,res,next)=>{
    products.push(req.body)
    console.log(req.body);
    res.redirect('/admin/productsdata')  
})
export default router;

