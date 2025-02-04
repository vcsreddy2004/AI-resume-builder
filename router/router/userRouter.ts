import express from "express";
import { UserView } from "../models/users/userView";
import { body,validationResult } from "express-validator";
import User from "../models/users/User";
import { IUser } from "../models/users/IUser";
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
            userData.errorMessage = "userName or email already exist";
            return res.status(400).json(userData);
        }
        else
        {
            user = new User(userData);
            user.save();
            return res.status(200).json(userData);
        }
        return res.status(200).json(userData);
    }
    catch(err)
    {
        return res.status(500).json(err);
    }
});
export default userRouter;