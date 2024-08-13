import userModel from "../models/userModel";
import { apiError } from "../utils/apiError";
import { apiResponse } from "../utils/apiResponse";
import bcrypt from "bcrypt"

export const postLogin = asyncHandler(async(req,res)=>{
    try {
        const data = req.body;
         const user=await userModel.findOne({email:data.email});
         if(user){
            const isValidPassword = await bcrypt.compare(data.password,user.password);
            if(isValidPassword){
                let uid=user._id;
                const options={
                    httpOnly:true,
                    secure:true
                }
                const loggedInUser=await userModel.findById(uid).select("-password ")
                const token = jwt.sign(uid,process.env.SECRET_KEY,{ expiresIn: process.env.EXPIRY });
                res.status(201)
                .cookie("token" , token,options)
                .json(201,loggedInUser,"user fetched successfully");
            }
            else{
                throw new apiError(404, "password is incorrect")
            }
         }
         else{
            res.status(200).json(new apiResponse(400, {},"user does not exists"))
         }
    } catch (error) {
        throw new apiError(404,"unable to login")
    }
})

export const postSignup=asyncHandler(async(req,res)=>{
    
    try {
        const {name ,email,password}=req.body
        if(!name || !email || !password){
            throw new apiError(404,"please enter all the required fields");
        }
        const user=await userModel.findOne({email});
        if(user){
            throw new apiError(404,"account with the same email already exists");
        }
        else{
            const hashedPassword=await bcrypt.hash(password,10)
            const newUser=await userModel.create({name,email,password:hashedPassword})
            res.status(201).json(new apiResponse(201,newUser,"user created successfully"))

        }
    } catch (error) {
        throw new apiError(500,"error registering user");
    }
})