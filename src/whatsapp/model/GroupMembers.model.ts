import { Schema } from "mongoose";  
import { IGroupMembers } from "../types";


// creating schema for group members
const groupMembersSchema: Schema<IGroupMembers> = new Schema({
    userId: {
        type: String,
        required: true,
        trim: true,
        ref: 'User'
    },
    groupId: {
        type: String,
        required: true,
        trim: true,
        ref: 'Group'
    },
    joinedAt: {
        type: Date,
        default: Date.now
    },
    leftAt: {
        type: Date,
        trim: true,
        sparse: true,
    },
    role: {
        type: String,
        required: true,
    }
});