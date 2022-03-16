import graphql, {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
} from "graphql";

let books = [
  {
    id: 1,
    name: "Ted Lasso",
    genre: "Comedy",
    authorId: 1,
  },
  {
    id: 4,
    name: "Kinemer Chorma",
    genre: "Comedy",
    authorId: 1,
  },
  {
    id: 2,
    name: "The Newsroom",
    genre: "Life",
    authorId: 2,
  },
  {
    id: 1,
    name: "Pachenko",
    genre: "Drama",
    authorId: 3,
  },
];

let authors = [
  {
    id: 1,
    name: "Philip Lewis",
    age: 28,
  },
  {
    id: 2,
    name: "Shakespeare",
    age: 54,
  },
  {
    id: 3,
    name: "Lovi Poe",
    age: 63,
  },
];

const BookType: any = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        console.log(parent);
        const author = authors.filter((author) => {
          if (author.id == parent.authorId) {
            return author;
          }
        });

        return author[0];
      },
    },
  }),
});

const AuthorType: any = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        const book = books.filter((book) => {
          if (parent.id == book.authorId) {
            return book;
          }
        });

        return book;
      },
    },
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
    author: {
      type: AuthorType,
      args: {
        id: { type: GraphQLID },
      },
      resolve(parent, args) {
        const author = authors.filter((author) => {
          if (author.id == args.id) {
            return author;
          }
        });

        return author[0];
      },
    },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return books;
      },
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args) {
        return authors;
      },
    },
  },
});

export default new GraphQLSchema({
  query: RootQuery,
});
