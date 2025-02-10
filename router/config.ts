import dotenv from "dotenv";
dotenv.config({path:"./.env"})
let HOST_NAME:string | undefined = process.env.HOST_NAME;
let PORT:string | undefined = process.env.PORT;
let MONGO_DB_URL:string | undefined= process.env.MONGO_DB_URL;
let SECRETE_KEY:string | undefined = process.env.SECRETE_KEY;
export default {HOST_NAME,PORT,MONGO_DB_URL,SECRETE_KEY}