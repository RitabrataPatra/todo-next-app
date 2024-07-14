import mongoose from "mongoose"

//logic  to connect to our database
export const ConnectDb = async()=>{
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("DB connected")
}