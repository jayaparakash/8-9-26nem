import { UserModel } from "./UserModel.js"

export const UserController =async(req,res)=>{
    try {
        
        let {name,password,email,role,phone,profile} = req.body 

        let existingUser = await UserModel.findOne({email})


        if (existingUser) {
                return res.status(409).json({
                    message:"User is Already Existing"
                });
            }

            const newUser = await UserModel({
                name,password,email,role,phone,profile
            })

            const data = await newUser.save()

            res.status(200).json({
                message:'UserCreated',
                data
            })


    } catch (err) {

            if (err.code === 11000) {
                return res.status(409).json({
                    message:'email is already exisit'
                })
            }

             res.status(500).json({
                    message:'internal server error'
                    ,err: err.message
                })

    }
}