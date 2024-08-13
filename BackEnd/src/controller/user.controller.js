import userModel from "../models/userModel";

export async function postLogin(req,res){
    try {
        const data = req.body;
         const user=await userModel.findOne({email:data.email});
         if(user){
            const isValidPassword = await bcrypt.compare(data.password,user.password);
            if(isValidPassword){
                let uid=user._id;
                const token = jwt.sign(uid,process.env.SECRET_KEY,{ expiresIn: process.env.EXPIRY });
            }
            else{
                return res.status(500).json({
                    message:"INVALID PASSWORD"
                })
            }
         }
         else{
            return res.status(500).json({
                message:"USER DOES NOT EXIST PLEASE SIGNUP TO CONTINUE"
            })
         }
    } catch (error) {
        
    }
}