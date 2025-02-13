import express from "express";
import config from "../config";
import { UserView } from "../models/users/userView";
import { IUser } from "../models/users/IUser";
import User from "../models/users/User";
import jwt from "jsonwebtoken";
const AuthLogin = async (req:express.Request,res:express.Response,next:express.NextFunction) => {
    let userData:UserView = {
        firstName:"",
        lastName:"",
        email:"",
        userName:"",
        password:"",
        token:req.body.token,
        lastLogIn:null,
        errorMessage:""
    }
    try
    {
        if(userData.token=="")
        {
            let errorMessage = "Invalid token";
            return res.status(500).json({errorMessage});
        }
        if(config.SECRETE_KEY)
        {
            let payLoad: string | jwt.JwtPayload = await jwt.verify(userData.token,config.SECRETE_KEY);
            if(typeof(payLoad) == "string")
            {
                userData.errorMessage = "Invalid token";
                return res.status(500).json(userData);
            }
            else
            {
                let user:IUser | null = await User.findOne({userName:payLoad.userName,email:payLoad.email}).select("-password");
                let currentDate = new Date();
                if(user)
                {
                    let loginLimit = new Date(user.lastLogIn);
                    loginLimit.setHours(loginLimit.getHours() + 24);
                    if (currentDate > loginLimit) 
                    {
                        userData.errorMessage = "token expired"
                        return res.status(400).json(userData);
                    }
                    else
                    {
                        userData = {
                            firstName:user.firstName,
                            lastName:user.lastName,
                            email:user.email,
                            userName:user.userName,
                            password:"",
                            errorMessage:"",
                            lastLogIn:user.lastLogIn,
                            token:""
                        }
                        req.body = userData;
                        next();
                    }
                }
                else
                {
                    userData = {} as UserView;
                    userData.errorMessage = "Invalid token";
                    return res.status(500).json(userData);
                }
            }
        }
        else
        {
            userData = {} as UserView;
            userData.errorMessage = "Environment variable error";
            return res.status(500).json(userData);
        }
    }
    catch(err)
    {

    }
}
export default AuthLogin;