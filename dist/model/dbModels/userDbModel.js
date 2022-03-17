"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const userDbSchema_1 = require("../dbSchemas/userDbSchema");
// all middleware house be here
exports.UserModel = mongoose_1.default.model("user", userDbSchema_1.userDbSchema);
