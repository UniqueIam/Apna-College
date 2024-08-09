import { User } from "../models/user.model.js";
import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';  // Corrected casing for jwt import
import sendEmail from "../utils/email.js";


const createToken = (user) => {
    const payload = { id: user._id };
    const secret = process.env.JWT_SECRET;
    const options = { expiresIn: '1h' };
    return jwt.sign(payload, secret, options);
};

const registerUser = async (req, res) => {
    const { name, email, password, phone } = req.body;

    try {
        // Check if all fields are provided
        if (!name || !email || !password || !phone) {
            return res.json({ success: false, message: "All fields are required" });
        }

        // Validate email
        if (!validator.isEmail(email)) {
            return res.json({
                success: false,
                message: "Please enter a valid email"
            });
        }

        // Validate password length
        if (password.length < 8) {
            return res.status(400).json({
                success: false,
                message: "Password must be at least 8 characters long"
            });
        }

        // Check whether user already exists
        const existedUser = await User.findOne({ email });
        if (existedUser) {
            return res.json({
                success: false,
                message: "User already exists"
            });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            phone
        });

        const user = await newUser.save();

        sendEmail(
            email,
            "Welcome to Apna College",
            `Hi ${name},\n\nThanku for registering to our platform`
        )
        const token = createToken(user);
        console.log("Generated Token",token);
        
        return res.json({
            success: true,
            token
        });

    } catch (error) {
        console.log("Error in registering User", error);

        return res.status(500).json({
            success: false,
            message: "Error in registering the user"
        });
    }
};


const loginUser = async (req, res) => {
    const { email, password } = req.body;

   try {
     if (!email || !password) {
         res.status(400).json({
             success: false,
             message: "All fields are required"
         })
     }
     const user = await User.findOne({ email });

     if (!user) {
         return res.status(400).json({
             success: false,
             message: "User didn't exist"
         })
     }
     const checkPassword = await bcrypt.compare(password, user.password);
     if (!checkPassword) {
         return res.json({
             success: false,
             message: "Password is incorrect"
         })
     }
 
     const token = createToken(user);

     res.status(200).json({
        success:true,
        message:"User login successfully",
        token
     })
   } catch (error) {
    console.log("Failed in logging the user",error);
    
    res.status(500).json({
        success:false,
        message:"Failed to login the user"
    })
   }


}

export { registerUser, loginUser }