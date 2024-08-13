import express from "express"


const userRouter=express.Router();

userRouter.route("/login")
.post(postLogin)

userRouter.route("/signup")
.post(postSignup)




export default userRouter;
