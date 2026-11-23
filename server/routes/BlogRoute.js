import express from 'express'
import {  createBlog, deleteBlog, getAllBlogs, patchBlog, updateBlog } from '../controllers/BlogController.js'

let route = express.Router()
// http://localhost:8000/api/v1/blog/createBlog
export const BlogRouteC = route.post('/createBlog',createBlog) 

// http://localhost:8000/api/v1/blog/getBlog
export const getBlogRoute = route.get('/getBlog',getAllBlogs) 

// http://localhost:8000/api/v1/blog/updateblog
export const updateBlogRoute = route.put('/updateblog/:id',updateBlog) 


// http://localhost:8000/api/v1/blog/updateblog
export const patchBlogRoute = route.patch('/updateblog/:id',patchBlog) 

// http://localhost:8000/api/v1/blog/delete
export const deleteBlogRoute = route.delete('/delete/:id',deleteBlog) 