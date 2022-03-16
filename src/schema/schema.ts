import graphql, {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
} from "graphql";

let books = [
  {
    id: 1,
    name: "Ted Lasso",
    genre: "Comedy",
  },
  {
    id: 2,
    name: "The Newsroom",
    genre: "Life",
  },
  {
    id: 1,
    name: "Pachenko",
    genre: "Drama",
  },
];

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        const book = books.filter((book) => {
          if (book.id == args.id) {
            return book;
          }
        });

        return book[0];
      },
    },
  },
});

export default new GraphQLSchema({
  query: RootQuery,
});
