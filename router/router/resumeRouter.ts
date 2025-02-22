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
        if(resumeData.resumeTitle == "" || !resumeData.resumeTitle)
        {
            return res.status(401).json({'errorMessage':"resume title can not left empty"});
        }
        let data = await model.findOne({resumeTitle:resumeData.resumeTitle,userName:resumeData.userName});
        if(data)
        {
            return res.status(400).json({'errorMessage':"resume title already included"});
        }
        await model.create(resumeData);
        return res.status(200).json({'errorMessage':""});
    }
    catch(err)
    {
        return res.status(500).json(err);
    }
});
resumeRouter.post("/resume-list",AuthLogin,async(req:express.Request,res:express.Response)=>{
    try
    {
        let user = req.body.user.userName;
        let data = await model.find({userName:user}).select("resumeTitle");
        return res.status(200).json(data);
    }
    catch(err)
    {
        return res.status(500).json(err);
    }
});
resumeRouter.post("/resume-data/:id",AuthLogin,async(req:express.Request,res:express.Response)=>{
    try
    {
        let user = req.body.user.userName;
        let resumeId:String = req.params.id;
        let data = await model.findOne({_id:resumeId,userName:user});
        if(data)
        {
            return res.status(200).json(data);
        }
        else
        {
            return res.status(401).json({"errorMessage":"invalid url"})
        }
    }
    catch(err)
    {
        return res.status(500).json(err);
    }
});
export default resumeRouter;