import mongoose from "mongoose";

export const ConnectDB=async()=>{
    await mongoose.connect('mongodb+srv://evanthechongdev:hORx4Jpio6A9xb8J@cluster0.ps743.mongodb.net/blog-app');
    console.log("db connected")
}