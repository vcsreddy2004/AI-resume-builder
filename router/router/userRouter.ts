import express from "express";
import { UserView } from "../models/users/userView";
import User from "../models/users/User";
import { IUser } from "../models/users/IUser";
import bcrypt from "bcryptjs";
import config from "../config";
import AuthLogin from "../middleWare/auth";
import jwt from "jsonwebtoken";
let userRouter:express.Router = express.Router();
userRouter.post("/register",async(req:express.Request,res:express.Response)=>{
    try
    {
        let userData:UserView = {
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            userName:req.body.userName,
            password:req.body.password,
            token:"",
            lastLogIn:null,
            errorMessage:""
        }
        let user:IUser | null = await User.findOne({ $or: [{userName:userData.userName},{email:userData.email}]});
        if(user)
        {
            userData = {} as UserView;
            userData.errorMessage = "user name or email already exist";
            return res.status(400).json(userData);
        }
        else if(userData.userName == userData.password)
        {
            userData = {} as UserView;
            userData.errorMessage = "user name and password is same";
            return res.status(400).json(userData);
        }
        else
        {
            let salt:string = await bcrypt.genSalt(10);
            userData.password = await bcrypt.hash(userData.password,salt);
            user = new User(userData);
            user.save();
            return res.status(200).json(userData);
        }
    }
    catch(err)
    {
        return res.status(500).json(err);
    }
});
userRouter.post("/login",async(req:express.Request,res:express.Response)=>{
    try
    {
        let userData:UserView = {
            firstName:"",
            lastName:"",
            email:"",
            userName:req.body.userName,
            password:req.body.password,
            token:"",
            lastLogIn:null,
            errorMessage:""
        }
        let user:IUser | null = await User.findOne({userName:userData.userName});
        if(user)
        {
            if(await bcrypt.compare(userData.password,user.password))
            {
                let currentDate = new Date();
                if(user.lastLogIn)
                {
                    let loginLimit = new Date(user.lastLogIn);
                    loginLimit.setHours(loginLimit.getHours() + 24);
                    if (currentDate > loginLimit) 
                    {
                        let payLoad = {
                            email:user.email,
                            userName:user.userName
                        }
                        userData = {} as UserView;
                        if(config.SECRETE_KEY)
                        {
                            await User.findOneAndUpdate({userName:user.userName},{lastLogIn:new Date()},{ new: true } );
                            userData.token = await jwt.sign(payLoad,config.SECRETE_KEY);
                            userData.errorMessage = "";
                            return res.status(200).json(userData);
                        }
                        else
                        {
                            userData = {} as UserView;
                            userData.errorMessage = "Environment variable error";
                            return res.status(500).json(userData);
                        }
                    }
                    userData.errorMessage = "Login after 24 hours"
                    return res.status(400).json(userData);
                    
                }
                else
                {
                    let payLoad = {
                        email:user.email,
                        userName:user.userName
                    }
                    userData = {} as UserView;
                    if(config.SECRETE_KEY)
                    {
                        await User.findOneAndUpdate({userName:user.userName},{lastLogIn:new Date()},{ new: true } );
                        userData.token = await jwt.sign(payLoad,config.SECRETE_KEY);
                        return res.status(200).json(userData);
                    }
                    else
                    {
                        userData = {} as UserView;
                        userData.errorMessage = "Environment variable error";
                        return res.status(500).json(userData);
                    }
                }
            }
            else
            {
                userData = {} as UserView;
                userData.errorMessage = "Invalid password";
                return res.status(400).json(userData);
            }
        }
        else
        {
            userData = {} as UserView;
            userData.errorMessage = "user name dose not exist";
            return res.status(400).json(userData);
        }
    }
    catch(err)
    {
        return res.status(500).json(err);
    }
});
userRouter.post("/get-user-data",AuthLogin,async(req:express.Request,res:express.Response)=>{
    try
    {
        let userData:UserView = {
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            userName:req.body.userName,
            password:"",
            token:"",
            lastLogIn:req.body.lastLogIn,
            errorMessage:""
        }
        return res.status(200).json(userData);
    }
    catch(err)
    {
        return res.status(500).json(err);
    }
});
export default userRouter;