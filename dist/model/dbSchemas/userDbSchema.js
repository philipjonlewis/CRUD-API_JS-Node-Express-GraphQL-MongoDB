"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDbSchema = void 0;
const mongoose_1 = require("mongoose");
exports.userDbSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        // required: [true, "You must enter your first name"],
    },
    lastName: {
        type: String,
        // required: [true, "You must enter your last name"],
    },
    username: {
        type: String,
        // required: [true, "You must enter a username"],
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        // required: [true, "You must enter a password"],
        trim: true,
        select: false,
    },
    email: {
        type: String,
        // required: [true, "You must enter an email"],
        trim: true,
        unique: true,
    },
}, { timestamps: true });
