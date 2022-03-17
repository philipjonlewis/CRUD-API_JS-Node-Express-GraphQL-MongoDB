import gql from "graphql-tag";

export const typeDefs = gql`
  type Query {
    phases: [Phase]
    phase(_id: ID!): Phase
  }

  type Mutation {
    createPhase(input: PhaseMutation): Phase
    updatePhase(input: PhaseMutation): Phase
    deletePhase: String
  }

  type Phase {
    _id: ID!
    phaseName: String
  }

  input PhaseMutation {
    _id: ID
    phaseName: String!
  }
`;
