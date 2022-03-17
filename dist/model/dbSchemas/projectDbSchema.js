"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectDbSchema = void 0;
const mongoose_1 = require("mongoose");
exports.projectDbSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "user",
        required: [true, "All projects must have a user"],
    },
    projectName: {
        type: String,
        required: [true, "All projects must have a name"],
    },
    dateOfDeadline: { type: Date, required: true },
    projectDescription: { type: String },
    projectImage: { type: String },
    natureOfProject: {
        type: String,
        required: [true, "All projects must have a category"],
    },
    phases: [{ type: String, ref: "phase" }],
}, { timestamps: true });
