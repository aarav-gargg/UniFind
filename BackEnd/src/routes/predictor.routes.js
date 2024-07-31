import { Router } from "express";
import { ipuPredictor } from "../controller/predictor.controller.js";

const router=Router();
 router.route('/ipu-predictor').post(ipuPredictor)

 export default  router
 
   