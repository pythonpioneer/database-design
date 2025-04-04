import { Schema } from "mongoose";
import { IGroup } from "../types";


// creating schema for group
const groupSchema: Schema<IGroup> = new Schema({
    groupId: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true,
        index: true,  // to search by group name
    },
    createdBy: {
        type: String,
        required: true,
        trim: true,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});