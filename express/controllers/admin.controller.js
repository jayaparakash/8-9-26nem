// import Productsmodel from "../models/products.model.js"
import { save } from "../models/products.model.js";

export const adminController = (req,res,next)=>{
res.render('admin.ejs')
}

export const adminProducts =  (req,res,next)=>{
    // let ProductsM = new Productsmodel(req.body.name)
    // ProductsM.save()
  save(req.body)
    // products.push(req.body)
    console.log(req.body);
    res.redirect('/admin/productsdata')  
}