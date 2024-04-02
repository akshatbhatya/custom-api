import { app } from "./app.js";
import connectDb from "./db/index.js";
import dotenv from "dotenv";
dotenv.config({path:"./env"})

console.log(process.env.MONGODB_URI);

connectDb()
.then(()=>{
    app.listen(process.env.PORT||800,()=>{
        console.log("server is started");

        app.on("error",(err)=>{
            console.log(err);
        })
    })
})
.catch((err)=>console.log(err));