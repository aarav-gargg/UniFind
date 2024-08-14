import jwt from "jsonwebtoken"
import userModel from "../models/userModel.js"
import {asyncHandler} from "../utils/AsyncHandler.js"
import {apiError} from "../utils/apiError.js"
import cookieParser from "cookie-parser"

export const verifyJWT= asyncHandler(async(req,_,next)=>{
    try {
        const token=req.cookies?.token || req.header("Authorization")?.replace("Bearer ","")
        if(!token){
            throw new apiError(401,"Unauthorised request")
        }
    
        const decodedToken=jwt.verify(token,process.env.SECRET_KEY)
        const user =await userModel.findById(decodedToken?.uid).select("-password")
        if(!user){
            throw new apiError(401,"Invald Access Token")
        }
        req.user=user
        next()
    } catch (error) {
        throw new apiError(401,error?.message ||"Inavlid access Token")
    }
})