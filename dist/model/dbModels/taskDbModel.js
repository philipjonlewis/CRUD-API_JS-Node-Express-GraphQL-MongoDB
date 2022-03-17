"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const taskDbSchema_1 = require("../dbSchemas/taskDbSchema");
// All the mongoose middleware functions should be here
exports.TaskModel = mongoose_1.default.model("task", taskDbSchema_1.taskDbSchema);
