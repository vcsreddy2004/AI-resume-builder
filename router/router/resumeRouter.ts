import express from "express";
import AuthLogin from "../middleWare/auth";
import mongoose, { mongo } from "mongoose";
import OpenAI from 'openai';
import config from "./../config";
let resumeRouter:express.Router = express.Router();
const model = mongoose.model("resumeData",new mongoose.Schema({},{strict:false}), "resumes");
const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: config.AI_API_KEY,
  defaultHeaders: {
    'HTTP-Referer': 'none',
    'X-Title': 'resume builder', 
  },
});
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
    data = await model.create(resumeData);
    return res.status(200).json(data);
  }
  catch(err)
  {
    return res.status(500).json(err);
  }
});
resumeRouter.post("/ai_generated",AuthLogin,async(req:express.Request,res:express.Response)=>{
  let prompt = req.body.prompt;
  try
  {
    const completion = await openai.chat.completions.create({
      model: 'cognitivecomputations/dolphin3.0-r1-mistral-24b:free',
      messages: [
        {
          role: 'user',
          content: `[${prompt}] convert [...] paragraph into bullet points avoid saying here your bullet points and also ending text`,
        },
      ],
    });
    return res.status(200).json({"AIResponse":completion.choices[0].message.content});
  }
  catch (err)
  {
    return res.status(500).json({"AIRespnose":err})
  }
});
resumeRouter.post("/resume-list",AuthLogin,async(req:express.Request,res:express.Response)=>{
  try
  {
    let user = req.body.user.userName;
    let data = await model.find({userName:user}).select(["resumeTitle","_id"]);
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
resumeRouter.post("/delete/:resumeTitle",AuthLogin,async(req:express.Request,res:express.Response)=>{
  try
  {
    let user = req.body.user.userName;
    let resumeTitle:String = req.params.resumeTitle;
    let data = await model.findOneAndDelete({resumeTitle:resumeTitle,userName:user});
    if(data)
    {
      return res.status(200).json(data);
    }
    else
    {
        return res.status(401).json({"errorMessage":"unauthorised access"})
    }
  }
  catch(err)
  {
    return res.status(500).json(err);
  }
});
export default resumeRouter;