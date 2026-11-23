import { BlogModel } from "../models/BlogModel.js";

export const createBlog = async (req, res) => {
    try {

        // Get data from Postman request body
        const { title, image, content, topic } = req.body;

        // Create new blog document
        const newBlog = new BlogModel({
            title,
            image,
            content,
            topic
        });

        // Save blog inside MongoDB
        const savedBlog = await newBlog.save();

        res.status(201).json({
            message: "Blog created successfully",
            data: savedBlog
        });

    } catch (error) {

        res.status(500).json({
            message: "Error creating blog",
            error: error.message
        });

    }
};


export const getAllBlogs = async (req, res) => {
    try {

        // Get all blogs from MongoDB
        const blogs = await BlogModel.find();

        res.status(200).json({
            message: "Blogs fetched successfully",
            totalBlogs: blogs.length,
            data: blogs
        });

    } catch (error) {

        res.status(500).json({
            message: "Error fetching blogs",
            error: error.message
        });

    }
};


// put
export const updateBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await BlogModel.findByIdAndUpdate(
            id,
            {
                title: req.body.title,
                image: req.body.image,
                content: req.body.content,
                topic: req.body.topic
            },
            { new: true, runValidators: true }
        );
        if (!data) {
            return res.status(404).json({
                message: "Blog not found"
            });
        }
        res.status(200).json({
            message: "Blog updated successfully",
            data
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


export const patchBlog = async (req, res) => {
    try {

        const { id } = req.params;

        const data = await BlogModel.findByIdAndUpdate(
            id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!data) {
            return res.status(404).json({
                message: "Blog not found"
            });
        }

        res.status(200).json({
            message: "Blog partially updated",
            data
        });

    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};


// // DELETE - Delete Blog
export const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;

        const data = await BlogModel.findByIdAndDelete(id);

        if (!data) {
            return res.status(404).json({
                message: "Blog not found"
            });
        }

        res.status(200).json({
            message: "Blog deleted successfully",
            data
        });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};



// PATCH - Update Specific Fields
// export const patchBlog = async (req, res) => {
//     try {

//         const { id } = req.params;

//         const allowedFields = ['title', 'image', 'content', 'topic'];

//         const updates = Object.fromEntries(
//             Object.entries(req.body).filter(([key]) =>
//                 allowedFields.includes(key)
//             )
//         );

//         if (Object.keys(updates).length === 0) {
//             return res.status(400).json({
//                 message: "No valid fields provided"
//             });
//         }

//         const data = await BlogModel.findByIdAndUpdate(
//             id,
//             { $set: updates },
//             { new: true, runValidators: true }
//         );

//         if (!data) {
//             return res.status(404).json({
//                 message: "Blog not found"
//             });
//         }

//         res.status(200).json({
//             message: "Blog partially updated",
//             data
//         });

//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// };