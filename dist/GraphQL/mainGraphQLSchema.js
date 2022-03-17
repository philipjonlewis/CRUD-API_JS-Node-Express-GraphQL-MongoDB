"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.graphQLSchema = void 0;
const schema_1 = require("@graphql-tools/schema");
const project_1 = __importDefault(require("./project"));
const phase_1 = __importDefault(require("./phase"));
const task_1 = __importDefault(require("./task"));
exports.graphQLSchema = (0, schema_1.makeExecutableSchema)({
    typeDefs: [phase_1.default.typeDefs, project_1.default.typeDefs, task_1.default.typeDefs],
    resolvers: [
        project_1.default.resolvers,
        phase_1.default.resolvers,
        task_1.default.resolvers,
    ],
});
