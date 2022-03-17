"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task_types_1 = require("./task.types");
const task_resolvers_1 = require("./task.resolvers");
exports.default = { typeDefs: task_types_1.typeDefs, resolvers: task_resolvers_1.resolvers };
