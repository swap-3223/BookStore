import UserModel from "../model/userModel.js";
import bcrypt from 'bcrypt'

export const  Signup = async(req,res)=>{
    try {
        const{fullName,email,password}=req.body;
        const user = await UserModel.findOne({email});
        if(user){
            return res.status(400).json({message: 'User Already Exist :('})
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const createUser= new UserModel({
            fullName,
            email,
            password:hashedPassword
        });
        await createUser.save();
        res.status(201).json({message: 'user created succesfully :)',user:{
            _id: createUser._id,
            fullName:createUser.fullName,
            email:createUser.email
        }
    })
    } catch (error) {
        console.log("error: ", error);
        res.status(500).json({message: "Internal server error:("})
    }
}

export const login = async(req,res)=>{
    try {
        const {email,password} = req.body;
        const user = await UserModel.findOne({email});
        const isMatch = await bcrypt.compare(password, user.password);

        if(!user || !isMatch){
            return res.status(400).json({message : "Invalid username or password"});
        }
        else{
            res.status(200).json({
                message:"Login successful :)",
                user:{
                    _id:user._id,
                    fullName:user.fullName,
                    email:user.email
                }
            })
        }
    } catch (error) {
        console.log("message: ", error.message);
        res.status(500).json({message: "Internal server error"});
    }
}