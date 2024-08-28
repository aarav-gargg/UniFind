import { apiError } from "../utils/apiError.js";
// import { asyncHandler } from "../utils/AsyncHandler.js";
import { readJson } from "../utils/fileReader.js";



const ipuPredictor = async (req, res) => {
    try {
        // console.log(req.body)
        const { state, rank, category, gender } = req.body;
        if (!state || !rank || !category || !gender) {
          throw new apiError(400, "please enter all required details");
        }
        let quota='HS';

        if(state !== "Delhi") {
            quota = 'OS';
        }

        const filePath = 'cutoffs/ipuCutoff.json';
        const cutoffDetails = await readJson(filePath); // Await the Promise
        
        // console.log('Cutoff Details:', cutoffDetails); // Log the cutoff details to ensure they are read correctly

        const matchingColleges = cutoffDetails.filter(college => 
            college.Category === category &&
            (college.Quota === quota || college.Quota === "AI") &&
           
            rank <= college.closingRank
        );

        // console.log('Matching Colleges:', matchingColleges); // Log the matching colleges
        res.json(matchingColleges); // Respond with the matching colleges
    } catch (err) {
        // console.error('Error in ipuPredictor:', err);
        res.status(500).send('Error processing request');
    }
};


export {
    ipuPredictor
}