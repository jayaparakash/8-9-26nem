import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import { adminController, adminProducts } from '../controllers/admin.controller.js'
 let router = express.Router()

 let __fileName = fileURLToPath(import.meta.url)
 let __dirname = path.dirname(__fileName)

router.use(express.static(
    path.join(__dirname,'../public')
))

router.get('/productsdata',adminController)
router.post('/product', adminProducts)

export default router;

















//        res.send(` <form action="/admin/product" method="post">
//         <input type="text" name="name">
//         <button type="submit">submit</button>
//     </form>
//  `)
// res.sendFile(path.join(__dirname,'../views','admin.html')