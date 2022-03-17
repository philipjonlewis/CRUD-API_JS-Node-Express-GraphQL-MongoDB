import { makeExecutableSchema } from "@graphql-tools/schema";


import projectSchema from "./project";
import phaseSchema from "./phase";
import taskSchema from "./task";

export const graphQLSchema = makeExecutableSchema({
  typeDefs: [phaseSchema.typeDefs, projectSchema.typeDefs, taskSchema.typeDefs],
  resolvers: [
    projectSchema.resolvers,
    phaseSchema.resolvers,
    taskSchema.resolvers,
  ],
});
