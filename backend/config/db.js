import mongoose from "mongoose"

import dotenv from "dotenv"
dotenv.config()
export const connectDb=async () => {

await mongoose.connect("mongodb+srv://daoudhdj:8AahNXhjUIhsvdox@cluster0.qxopclf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser:true,
    useUnifiedTopology:true    } ).then(() => {
        console.log("MongoDB connected")
    }).catch((err) => { 
        console.log("MongoDB connection error", err)
    })  
}