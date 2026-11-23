import mongoose from 'mongoose'

let blogSchema = new mongoose.Schema({
   title:{
    type:String,
    required:true
   },
   image:{
     type:String,
    required:true
   } ,
   content:{
     type:String,
    required:true
   },
   topic:{
     type:String,
    required:true
   },
   createAt:{
    type:Date,
    default:Date.now(),
   }
})

export const BlogModel =  mongoose.model('blog',blogSchema)