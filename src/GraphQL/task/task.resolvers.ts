import { TaskModel } from "../../model/dbModels/taskDbModel";

export const resolvers = {
  Query: {
    tasks: (parent: any, args: any, context: any, info: any) => {
      return TaskModel.find({});
    },
    task: (parent: any, args: any, context: any, info: any) => {
      console.log(args);
      return TaskModel.findOne({ _id: args._id });
    },
  },
  Mutation: {
    createTask: (parent: any, args: any, context: any, info: any) => {
      return TaskModel.find({});
    },
  },
};
