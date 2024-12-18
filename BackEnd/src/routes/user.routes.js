import express from "express"
import {getCurrentUser, hitApi, logoutUser, postLogin , postSignup} from "../controller/user.controller.js"
import { verifyJWT } from "../middleware/auth.middleware.js";
import { AddNewReview  , fecthReview} from "../controller/reviewController.js";


const userRouter=express.Router();

userRouter.route("/login")
.post(postLogin)

userRouter.route("/signup")
.post(postSignup)

userRouter.route('/jwt')
.get(verifyJWT,getCurrentUser);

userRouter.route('/logout')
.get(verifyJWT,logoutUser)

userRouter.route('/review/new-review')
.post(verifyJWT,AddNewReview)

userRouter.route("/collegeReview")
.post(fecthReview);

userRouter.route("/api")
.get(hitApi)




export default userRouter;
