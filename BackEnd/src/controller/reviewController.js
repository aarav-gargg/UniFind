import reviewModel from "../models/reviewModel.js";
import { apiError } from "../utils/apiError.js";
import { apiResponse } from "../utils/apiResponse.js";
import { asyncHandler } from "../utils/AsyncHandler.js";


export const AddNewReview = asyncHandler(async (req, res) => {
    const { rating, content, collegeId } = req.body;
    const id = req.user._id;
    if (!rating || !content || !collegeId) {
        throw new apiError(400, "Please fill in all fields");
    }
    try {
        const newReview = await reviewModel.create({
            rating,
            content,
            collegeId,
            owner: id

        })
        return res.status(201).json(new apiResponse(201, newReview, "Review created successfully"));

    } catch (error) {
        throw new apiError(401, "unable to create review")
    }
})

export const fecthReview = asyncHandler(async (req, res) => {
    try {
        const { collegeId } = req.body;
        // console.log(" fetch reviews apis hit ")
        const reviews = await reviewModel.find({ collegeId: collegeId })
        .populate("owner","name");
        res.status(200).json(
           new apiResponse(200,reviews,"reviews fetched successfully")
        );
    } catch (error) {
        throw new apiError(401, "UNABLE TO FETCH REVIEWS")
    }
})