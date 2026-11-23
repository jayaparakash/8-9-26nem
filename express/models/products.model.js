// import path from 'path'
// import { fileURLToPath } from 'url'
// import fs from 'fs'

// // let products = []

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

// const filePath = path.join(__dirname , 'products.json');

// export const getAlProducts =  ()=>{
    
//     let data = fs.readFileSync(filePath , "utf-8")
//     // return data.trim() ? JSON.parse(data) : [];
//     return JSON.parse(data);
// }

//  export const save =  (product)=>{
//    let products = getAlProducts()

//     const newProduct = {
//         id: Math.floor(100000 + Math.random() * 900000),
//         ...product
//     };

//    products.push(newProduct) 
//    fs.writeFileSync(filePath, JSON.stringify(products , null ,2))
// };




import mongoose from 'mongoose';

// 1. Create Schema
const productsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

// 2. Create Model
const Products = mongoose.model('Products',productsSchema);

// 3. Save Data
export const save = async (product) => {
    const newProduct = new Products(product);
    return await newProduct.save();
};

// 4. Get All Products
export const getAlProducts = async () => {
    return await Products.find();
};


















// // export default class Productsmodel {
// //     constructor(name) {
// //         this.name = name
// //     }
// //     save(){
// //         products.push(this)
// //     }
// //     static getAllProducts(){
// //         return products
// //     }
// // }

