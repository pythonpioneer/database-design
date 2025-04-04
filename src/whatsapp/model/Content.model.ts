import { Schema } from "mongoose";
import { IContent } from "../types";


// creating schema for content
const contentSchema: Schema<IContent> = new Schema({
    contentId: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    contentType: {
        type: String,
        required: true,
        trim: true
    },
    textValue: {
        type: String,
        trim: true,
        sparse: true,
    },
    mediaUrl: {
        type: String,
        trim: true,
        sparse: true,
    }
});