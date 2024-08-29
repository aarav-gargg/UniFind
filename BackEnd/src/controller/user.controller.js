import userModel from "../models/userModel.js";
import { apiError } from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/AsyncHandler.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const postLogin = asyncHandler(async (req, res) => {
    const data = req.body;
    try {
        const user = await userModel.findOne({ email: data.email });
        if (user) {
            const isValidPassword = await bcrypt.compare(data.password, user.password);
            if (isValidPassword) {
                const uid = user._id;
                const token = jwt.sign({ uid }, process.env.SECRET_KEY, { expiresIn: process.env.EXPIRY });
                
                const options = {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production',
                    sameSite: 'None',
                    maxAge: 24 * 60 * 60 * 1000,
                };

                const loggedInUser = await userModel.findById(uid).select("-password");
                res.status(201)
                    .cookie("token", token, options)
                    .json(new apiResponse(201, loggedInUser, "User fetched successfully"));
                // console.log(res);
            } else {
                res.status(404).json({
                    message:"INCORRECT PASSWORD PLEASE TRY AGAIN"
                });
            }
        } else {
            res.status(400).json({
                message:"USER DOES NOT EXIST"
            });
        }
    } catch (error) {
        throw new apiError(500, "Unable to login");
    }
});

export const postSignup = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({
            message:"PLEASE FILL ALL THE DETAILS"
        });
    }

    try {
        const user = await userModel.findOne({ email });
        if (user) {
            return res.status(400).json({
                message:"USER WITH THIS EMAIL ALREADY EXISTS"
            });
        } else {
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = await userModel.create({ name, email, password: hashedPassword });
            res.status(201).json(new apiResponse(201, newUser, "User created successfully"));
        }
    } catch (error) {
        throw new apiError(500, "Error registering user");
    }
});

export const getCurrentUser=asyncHandler(async(req,res)=>{
    try {
        return res.status(200)
        .json(new apiResponse(200,req.user,"user fetched successfully"))
    } catch (error) {
        throw new apiError(404,"cannot get details")
    }
})


export const logoutUser=asyncHandler(async(req,res)=>{
    try{
        
        const options={
            httpOnly:true,
            secure:true
        }
        return res.status(200)
        .clearCookie("token",options)
        .json(new apiResponse(200,{},"User logged out"))
    }
    catch(error){
        throw new apiError(500,"error logging out user")
    }
})
