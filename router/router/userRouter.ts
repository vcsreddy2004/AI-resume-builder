import express from "express";
import { UserView } from "../models/users/userView";
import { body,validationResult } from "express-validator";
import User from "../models/users/User";
import { IUser } from "../models/users/IUser";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../config";
let userRouter:express.Router = express.Router();
userRouter.post("/register",[
    body("firstName").not().isEmpty().withMessage("First name Can't left empty"),
    body("lastName").not().isEmpty().withMessage("Last name can't left empty"),
    body("email").not().isEmpty().withMessage("Email can't left empty"),
    body("userName").not().isEmpty().withMessage("username can't left empty"),
    body("email").not().isEmpty().withMessage("Email ID can't left empty"),
    body("email").isEmail().withMessage("Email ID not defined"),
    body("password").not().isEmpty().withMessage("Password can't left empty"),
],async(req:express.Request,res:express.Response)=>{
    try
    {
        let errors = validationResult(req);
        if(!errors.isEmpty())
        {
            return res.status(400).json(errors);
        }
        let userData:UserView = {
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            userName:req.body.userName,
            password:req.body.password,
            token:"",
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
userRouter.post("/login",[
    body("userName").not().isEmpty().withMessage("username can't left empty"),
    body("password").not().isEmpty().withMessage("Password can't left empty"),
],async(req:express.Request,res:express.Response)=>{
    try
    {
        let errors = validationResult(req);
        if(!errors.isEmpty())
        {
            return res.status(400).json(errors);
        }
        let userData:UserView = {
            firstName:"",
            lastName:"",
            email:"",
            userName:req.body.userName,
            password:req.body.password,
            token:"",
            errorMessage:""
        }
        let user:IUser | null = await User.findOne({userName:userData.userName});
        if(user)
        {
            if(await bcrypt.compare(userData.password,user.password))
            {
                let payLoad = {
                    email:user.email,
                    userName:user.userName
                }
                userData = {} as UserView;
                userData.token = await jwt.sign(payLoad,config.SECRETE_KEY);
                return res.status(200).json(userData);
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
userRouter.post("/get-user-data",async(req:express.Request,res:express.Response)=>{
    try
    {
        let userData:UserView = {
            firstName:"",
            lastName:"",
            email:"",
            userName:"",
            password:"",
            token:req.body.token,
            errorMessage:""
        }
        if(userData.token=="")
        { 
            userData.errorMessage = "Invalid token";
            return res.status(500).json(userData);
        }
        let payLoad: string | jwt.JwtPayload = jwt.verify(userData.token,config.SECRETE_KEY);
        if(typeof(payLoad) == "string")
        {
            userData.errorMessage = "Invalid token";
            return res.status(500).json(userData);
        }
        else
        {
            let user:IUser | null = await User.findOne({userName:payLoad.userName,email:payLoad.email}).select("-password");
            if(user)
            {
                userData = {
                    firstName:user.firstName,
                    lastName:user.lastName,
                    email:user.email,
                    userName:user.userName,
                    password:"",
                    errorMessage:"",
                    token:""
                }
                return res.status(200).json(userData);
            }
            else
            {
                userData = {} as UserView;
                userData.errorMessage = "Invalid token";
                return res.status(500).json(userData);
            }
        }
    }
    catch(err)
    {
        return res.status(500).json(err);
    }
});
export default userRouter;