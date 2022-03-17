"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhaseModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const phaseDbSchema_1 = require("../dbSchemas/phaseDbSchema");
// All the mongoose middleware functions should be here
exports.PhaseModel = mongoose_1.default.model("phase", phaseDbSchema_1.phaseDbSchema);
