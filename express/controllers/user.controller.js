// import  Productsmodel  from "../models/products.model.js"
import { getAlProducts } from "../models/products.model.js"

export const userController =  (req,res,next)=>{
    // let products = Productsmodel.getAllProducts()
    let products =   getAlProducts()
    res.render('shop.ejs',{pros:products})
}

export const errorController = (req,res,next)=>{

        res.status(404).render('404.ejs',{pageTitle:'Error page'})    
}



  // res.send('<h1>404 not found page<h1>')
    // res.sendFile(path.join(__dirname,'./views/404data.html'))