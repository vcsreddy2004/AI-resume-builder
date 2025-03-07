import dotenv from "dotenv";
dotenv.config();
let PORT:string | undefined = process.env.PORT;
let MONGO_DB_URL:string | undefined= process.env.MONGO_DB_URL;
let SECRETE_KEY:string | undefined = process.env.SECRETE_KEY;
let AI_API_KEY:string | undefined = process.env.AI_API_KEY;
export default {PORT,MONGO_DB_URL,SECRETE_KEY,AI_API_KEY}