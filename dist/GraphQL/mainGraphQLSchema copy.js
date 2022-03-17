"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
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
const BookType = new graphql_1.GraphQLObjectType({
    name: "Book",
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        name: { type: graphql_1.GraphQLString },
        genre: { type: graphql_1.GraphQLString },
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
const AuthorType = new graphql_1.GraphQLObjectType({
    name: "Author",
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        name: { type: graphql_1.GraphQLString },
        age: { type: graphql_1.GraphQLInt },
        books: {
            type: new graphql_1.GraphQLList(BookType),
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
const RootQuery = new graphql_1.GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        book: {
            type: BookType,
            args: {
                id: { type: graphql_1.GraphQLID },
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
                id: { type: graphql_1.GraphQLID },
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
            type: new graphql_1.GraphQLList(BookType),
            resolve(parent, args) {
                return books;
            },
        },
        authors: {
            type: new graphql_1.GraphQLList(AuthorType),
            resolve(parent, args) {
                return authors;
            },
        },
    },
});
exports.default = new graphql_1.GraphQLSchema({
    query: RootQuery,
});
