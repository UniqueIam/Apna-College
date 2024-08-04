import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type:String,
        requird:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true,
    }
})

export const User = mongoose.models.User || mongoose.model("User",userSchema);