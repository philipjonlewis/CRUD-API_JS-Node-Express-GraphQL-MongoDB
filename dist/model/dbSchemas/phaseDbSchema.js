"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phaseDbSchema = void 0;
const mongoose_1 = require("mongoose");
exports.phaseDbSchema = new mongoose_1.Schema({
    _id: { type: String, required: true },
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: "user" },
    project: { type: mongoose_1.Schema.Types.ObjectId, ref: "project" },
    phaseName: { type: String, require: true },
    phaseOrder: {
        type: Number,
        min: [1, "Phase must start with the first phase"],
        max: [8, "Phase must start with the first phase"],
        required: true,
    },
    cards: [{ type: String, ref: "card" }],
}, { timestamps: true });
