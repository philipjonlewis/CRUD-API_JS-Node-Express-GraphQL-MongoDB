"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const projectDbSchema_1 = require("../dbSchemas/projectDbSchema");
// all middleware house be here
exports.ProjectModel = mongoose_1.default.model("project", projectDbSchema_1.projectDbSchema);
