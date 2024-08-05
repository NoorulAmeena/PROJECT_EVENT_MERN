import mongoose from "mongoose";


export const  dbConnection = () =>{
    mongoose
    .connect(process.env.MONGO_URI, 
    {dbName: "MERN_STACK_EVENT" }
    )
    .then(() => {
        console.log("Connected to MongoDB!!");
    })
    .catch((err) => {
        console.log("Could not connect to MongoDB", err) 
 });
};