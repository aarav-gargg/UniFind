import mongoose from "mongoose"

const reviewSchema=mongoose.Schema({
    subject:{
        type:String,
        required:[true,"PLEASE PROVIDE A SUBJECT FOR YOUR REVIEW"],
    },
    collegeId:{
        type:String,
        required:[true,"THE REVIEW SHOULD BELONG TO A COLLEGE"]
    },
    rating:{
        type:Number,
        min:1,
        max:5,
    }
},{timeStamps:true})

const reviewModel = mongoose.model("Reviews",reviewSchema);

export default reviewModel;