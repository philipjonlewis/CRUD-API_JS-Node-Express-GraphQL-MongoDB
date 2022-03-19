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

import bodyParser from "body-parser";

const app: Application = express();
databaseConnection();

// app.get("/", (req: Request, res: Response) => {
//   res.send("Hello");
// });

UserModel.insertMany([
  {
    firstName: "Philip",
    lastName: "Lewis",
    username: "philipjonlewis",
    password: "PhilipLewis713!",
    email: "pihlipjonlewis@gmail.com",
  },
  {
    firstName: "Jon",
    lastName: "Echavez",
    username: "jonechavez",
    password: "DaylindaLewis814!",
    email: "joechavez@gmail.com",
  },
]);

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
