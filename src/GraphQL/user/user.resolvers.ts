import { UserModel } from "../../model/dbModels/userDbModel";

export const resolvers = {
  Query: {
    users: (parent: any, args: any, context: any, info: any) => {
      return UserModel.find({});
    },
    user: (parent: any, args: any, context: any, info: any) => {
      console.log(args);
      return UserModel.findOne({ _id: args._id });
    },
  },
  Mutation: {
    createUser: (parent: any, args: any, context: any, info: any) => {
      return UserModel.find({});
    },
  },
};
