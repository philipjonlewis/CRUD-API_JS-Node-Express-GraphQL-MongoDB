import "dotenv/config";
import { graphqlHTTP } from "express-graphql";
import { databaseConnection } from "./model/dbConnection";
import express, {
  Application,
  NextFunction,
  Request,
  Response,
  RequestHandler,
} from "express";

import { UserModel } from "./model/dbModels/userDbModel";

import { graphQLSchema } from "./GraphQL/mainGraphQLSchema";

const app: Application = express();
databaseConnection();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphQLSchema,
    graphiql: true,
  })
);

app.listen(3000, () => {
  console.log("Server Live");
});
