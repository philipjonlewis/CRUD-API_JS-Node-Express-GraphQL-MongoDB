import { makeExecutableSchema } from "@graphql-tools/schema";

import taskSchema from "./task";
import userSchema from "./user";

export const graphQLSchema = makeExecutableSchema({
  typeDefs: [
    userSchema.typeDefs, 
    taskSchema.typeDefs
  ],
  resolvers: [
    userSchema.resolvers,
    taskSchema.resolvers,
  ],
});
