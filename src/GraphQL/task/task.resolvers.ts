export const resolvers = {
    Query: {
      phases: (parent: any, args: any, context: any, info: any) => {
        return [
          {
            _id: 1,
            phaseName: "First Phase",
          },
          {
            _id: 2,
            phaseName: "Second Phase",
          },
          {
            _id: 3,
            phaseName: "Third Phase",
          },
        ];
      },
      phase: (parent: any, args: any, context: any, info: any) => {
        return {
          _id: 1,
          phaseName: "First Phase",
        };
      },
    },
  };
  