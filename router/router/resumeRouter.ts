import express from "express";
import AuthLogin from "../middleWare/auth";
import mongoose, { mongo } from "mongoose";
let resumeRouter:express.Router = express.Router();
const model = mongoose.model("resumeData",new mongoose.Schema({},{strict:false}), "resumes");
resumeRouter.post("/upload",AuthLogin,async(req:express.Request,res:express.Response)=>{
    try
    {
        let resumeData = req.body.resume;
        resumeData = {
            ...resumeData,
            userName: req.body.user.userName
        };
        await model.create(resumeData);
        return res.status(200).json({'errorMessage':""});
    }
    catch(err)
    {
        return res.status(500).json(err);
    }
});
export default resumeRouter;