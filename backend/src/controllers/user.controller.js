import { User } from "../models/user.model.js"
import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebToken';

const registerUser = async (req,res) =>{

    const createToken = (user) =>{
        const payload = {id: user._id};
        const secret = process.env.JWT_SECRET;
        const options = {expiresIn:'1h'};
        return jwt.sign(payload,secret,options);
    }

    const { name,email,password,phone } = req.body;
    //steps:
    //all fields are filled or not

    try {
        if(!name || !email || !password || !phone){
            res.json({success:false,message:"All fields are required"});
            console.log('all fields are required');
        }

        //validate email
        if(!validator.isEmail(email)){
            return res.json({
                success:false,
                message:"Please enter a valid email"
            })
        }
        
        //validate password length 
        if (password.length < 8) {
            return res.status(400).json({
                success: false,
                message: "Password must be at least 8 characters long"
            });
        }

        //check whether user already exists or not
        const existedUser = await User.findOne({email});
        if(existedUser){
            return res.json({
                success:false,
                message:"user already exist"
            })
        }

        //hash password
         const salt = await bcrypt.genSalt(10);
         const hashedPassword = await bcrypt.hash(password,salt);

         //create new user
         const newUser = new User({
            name,
            email,
            password:hashedPassword,
            phone
         });

         const user = await newUser.save();
         const token = createToken(user);
    
         return res.json({
            success:true,
            token
         })

    } catch (error) {
        console.log("Error in registering User",error);
        
        return res.json({
            success:false,
            message:"Error in registering the user"
        });

    }
}

export {registerUser}