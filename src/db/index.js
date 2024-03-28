import mongoose from "mongoose";
import  DB_NAME  from "../constants.js";

const connectDb=async()=>{
    try{
       const fetchData= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
       console.log(fetchData.connection.host);
    }
    catch(err){
        console.log("connection failed on database",err);
        process.exit(1);
    }
}

export default connectDb;