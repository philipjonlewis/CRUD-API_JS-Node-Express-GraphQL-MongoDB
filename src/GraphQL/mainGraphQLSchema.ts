import { makeExecutableSchema } from "graphql-tools";
import merge from "lodash.merge";

// import projectSchema from "./project";
import phaseSchema from "./phase";
// import taskSchema from "./task";

export const graphQLSchema = makeExecutableSchema({
  typeDefs: [phaseSchema.typeDefs],
  resolvers: merge(phaseSchema.resolvers),
});
