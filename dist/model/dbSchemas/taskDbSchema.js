"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskDbSchema = void 0;
const mongoose_1 = require("mongoose");
exports.taskDbSchema = new mongoose_1.Schema({
    _id: { type: String, required: true },
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: "user" },
    phase: { type: String, ref: "phase" },
    card: { type: String, ref: "card" },
    dateOfDeadline: { type: Date, required: true },
    isCompleted: { type: Boolean, default: false },
    isPriority: { type: Boolean, default: false },
    isLapsed: { type: Boolean, default: false },
    content: { type: String, required: true },
}, { timestamps: true });
