import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
    tasks: [Task]
    task(_id: ID!): Task
  }

  type Mutation {
    createTask(input: PhaseMutation): Task
    updateTask(input: PhaseMutation): Task
    # deleteTask(input: _id:ID): String
  }

  type Task {
    _id: ID!
    dateOfDeadline: String
    isCompleted: Boolean
    isPriority: Boolean
    isLapsed: Boolean
    content: String
  }

  input PhaseMutation {
    _id: ID
    phaseName: String!
  }
`;
