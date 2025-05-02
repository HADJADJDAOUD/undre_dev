import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";


// login user

const loginUser = async (req, res) => {

    const {email, password} = req.body;
    try{
        if(!email || !password){
            return res.status(400).json({message: "Please fill all fields" , success: false});
        }
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(400).json({message: "User not found" , success: false});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({message: "Invalid credentials" , success: false});
        }
        // create token
        const token = createToken(user._id);
        res.status(200).json({message: "Login successful", success: true, token, user});

    }
    catch(err){
        console.log(err);
        return res.status(500).json({message: "Server error", success: false});
    }
}
// creating token

const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });
}











// register user
const registerUser = async (req, res) => {
    const {name, email, password} = req.body;
    
    try{
        const exist = await userModel.findOne({email});
        if(exist){
            return res.status(400).json({message: "User already exists", session: false});
        }
        if(!name || !email || !password){
            return res.status(400).json({message: "Please fill all fields" , success: false});
        }
            // validate email and strong password
        if(!validator.isEmail(email)){
            return res.status(400).json({message: "Invalid email" , success: false});
        }
        if(password.legnth < 8){
            return res.status(400).json({message: "Weak password" , success: false});
        }
        //bcrypt password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
            const newUser = new userModel({
                name:name,
                email:email,
                password: hashedPassword,
            });
            await newUser.save();
            // create token

            const token = createToken(newUser._id);
            res.status(201).json({message: "User created successfully", success: true, token,});

    }
    catch(err){
        console.log(err);
        return res.status(500).json({message: "Server error", success: false});
    }

    

}


export { loginUser, registerUser };