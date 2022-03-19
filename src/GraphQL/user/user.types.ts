import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
    users: [User]
    user(_id: ID!): User
  }

  type Mutation {
    createUser(input: UserMutation): User
    updateUser(input: UserMutation): User
    # deleteTask(input: _id:ID): String
  }

  type User {
    _id: ID!
    firstName: String
    lastName: String
    username: String
    password: String
    email: String
  }

  input UserMutation {
    firstName: String
    lastName: String
    username: String
    password: String
    email: String
  }
`;
