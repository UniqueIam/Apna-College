import mongoose from 'mongoose'

const sigmaSchema = mongoose.Schema({
    amount:{
        type:Number,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    fullName:{
        type:String,
        require:true
    }
})

export const Sigma = mongoose.model("Sigma",sigmaSchema);