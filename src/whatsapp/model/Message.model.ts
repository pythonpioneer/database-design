import mongoose from "mongoose";
import { IMessage } from "@/whatsapp/types";

// creating schema for message
const messageSchema: mongoose.Schema<IMessage> = new mongoose.Schema({
    messageId: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    senderId: {
        type: String,
        required: true,
        trim: true,
        ref: 'User'
    },
    receiverId: {
        type: String,
        trim: true,
        ref: 'User',
        sparse: true,  // some messages might not have a receiver instead of a group
    },
    groupId: {
        type: String,
        trim: true,
        ref: 'Group',
        sparse: true,  // some messages might not have a group
    },
    contentId: {
        type: String,
        required: true,
        trim: true,
        ref: 'Content'
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});