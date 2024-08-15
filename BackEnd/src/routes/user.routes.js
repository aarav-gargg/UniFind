import express from "express"
import {getCurrentUser, logoutUser, postLogin , postSignup} from "../controller/user.controller.js"
import { verifyJWT } from "../middleware/auth.middleware.js";


const userRouter=express.Router();

userRouter.route("/login")
.post(postLogin)

userRouter.route("/signup")
.post(postSignup)

userRouter.route('/jwt')
.get(verifyJWT,getCurrentUser);

userRouter.route('/logout')
.get(verifyJWT,logoutUser)




export default userRouter;
