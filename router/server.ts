import express from "express";
import config from "./config";
import cors from "cors";
import mongoose from "mongoose";
import userRouter from "./router/userRouter";
import resumeRouter from "./router/resumeRouter";
let app:express.Application = express();
app.use(cors());
app.use(express.json());
app.use("/api/user",userRouter);
app.use("/api/resume",resumeRouter);
if(config.MONGO_DB_URL)
{
    mongoose.connect(config.MONGO_DB_URL).then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    });
}
app.get("/",(req:express.Request,res:express.Response)=>{
    return res.status(200).json({
        "msg":"Express servver is running"
    });
});
if(config.PORT)
{
    app.listen(Number(config.PORT),()=>{
        console.log(`Server has started`); 
    });
}