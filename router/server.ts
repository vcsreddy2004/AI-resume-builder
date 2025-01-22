import express from "express";
import config from "./config";
import cors from "cors";
let app:express.Application = express();
app.use(express.json())
app.use(cors())
app.get("/",(req:express.Request,res:express.Response)=>{
    res.status(200).json("Server running");
})
if(config.HOSTNAME && config.PORT)
{
    app.listen(Number(config.PORT),config.HOSTNAME,()=>{
        console.log(`server connected at http://${config.HOSTNAME}:${config.PORT}`)
    });
}