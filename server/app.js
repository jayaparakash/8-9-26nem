import dns from 'dns'
dns.setServers(['8.8.8.8','1.1.1.1'])

import express from 'express'
import dontenv from 'dotenv'
import mongoose from 'mongoose'
import { BlogRouteC, deleteBlogRoute, getBlogRoute, patchBlogRoute, updateBlogRoute } from './routes/BlogRoute.js'
import { userRouter } from './routes/UserRoutes.js'
 
dontenv.config()

let app = express()
let port = process.env.PORT

app.use(express.json());
app.use('/api/v1/blog',BlogRouteC)
app.use('/api/v1/blog',getBlogRoute)
app.use('/api/v1/blog',updateBlogRoute)
app.use('/api/v1/blog',patchBlogRoute)
app.use('/api/v1/blog',deleteBlogRoute)
app.use('/app/v1/user',userRouter)

let startserver = async ()=>{
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log('DB connected');
        app.listen(port , ()=>{
    console.log(`Server is running at port ${8000}`);
})
    } catch (err) {
        console.log(err);
        
    }
}
startserver()


// restApi

// get
    // from db get productdata
// post
    //posting user data
// put
    // replace the data
//patch
    // modifying data
//delete
    // clearing data
