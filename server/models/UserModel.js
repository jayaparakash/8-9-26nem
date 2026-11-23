import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
     name: {
          type: String,
          required: true
     },
     password: {
          type: String,
          required: true
     },
     email: {
          type: String,
          required: true,
          unique: true
     },
     role: {
          type: String,
          enum: ['user', 'admin', 'dev', 'tester'],
          required: true
     },
     profile: String,
     phone: String,
})

export const UserModel = mongoose.model('user',UserSchema)