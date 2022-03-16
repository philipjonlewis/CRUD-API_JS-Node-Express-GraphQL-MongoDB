import { makeExecutableSchema } from "graphql-tools";
import merge from "lodash.merge";

import projectSchema from "./project";
import phaseSchema from "./phase";
import taskSchema from "./task";

export const schema = makeExecutableSchema({
  typeDefs: [projectSchema.typeDefs, phaseSchema.typeDefs, taskSchema.typeDefs],
  resolvers: merge(
    projectSchema.resolvers,
    phaseSchema.resolvers,
    taskSchema.resolvers
  ),
});
