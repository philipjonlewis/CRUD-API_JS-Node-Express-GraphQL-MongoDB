import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";

export const ProjectType: any = new GraphQLObjectType({
  name: "Project",
  fields: () => ({
    _id: { type: GraphQLID },
    projectName: { type: GraphQLString },
  }),
});
