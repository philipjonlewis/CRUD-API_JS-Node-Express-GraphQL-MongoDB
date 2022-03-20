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
    createUser: async (parent: any, args: any, context: any, info: any) => {
      const { firstName, lastName, username, password, email } = args.input;
      console.log(args.input);
      const newUser = await UserModel.create({
        firstName,
        lastName,
        username,
        password,
        email,
      });

      console.log(newUser);

      return newUser;
    },
  },
};
