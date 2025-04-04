import mongoose from "mongoose";
import { IUser } from "@/whatsapp/types";

// creating schema for user
const userSchema: mongoose.Schema<IUser> = new mongoose.Schema({
    userId: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    firstName: String,
    lastName: String,
    mobileNumber: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        index: true,  // to search users by mobile number
    },
    profilePicture: String
});