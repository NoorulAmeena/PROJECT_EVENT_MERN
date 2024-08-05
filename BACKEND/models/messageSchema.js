import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Name Required!"],
        minLength: [3, "Name must contain at least 3 charecter"],
    },

    email:{
        type: String,
        required: [true, "Email Required!"],
        validate: [validator.isEmail, "Please enter a valid email address"],
    },
    subject:{
        type: String,
        required: [true, "Name Required!"],
        minLength: [5, "Subject must contain at least 3charecter"],
    },
    message:{
        type: String,
        required: [true, "Name Required!"],
        minLength: [3, "Message must contain at least 3 charecter"],
    },
    



});


export const Message = mongoose.model("message", messageSchema);