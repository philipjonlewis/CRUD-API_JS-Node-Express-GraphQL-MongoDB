import "dotenv/config";
import { graphqlHTTP } from "express-graphql";
import { databaseConnection } from "./model/dbConnection";
import { masterSeeder } from "./model/dbSeeders/dbSeeder";
import express, {
  Application,
  NextFunction,
  Request,
  Response,
  RequestHandler,
} from "express";

import { TaskModel } from "./model/dbModels/taskDbModel";

import { graphQLSchema } from "./GraphQL/mainGraphQLSchema";

import bodyParser from "body-parser";

const app: Application = express();
databaseConnection().then(() => {
  masterSeeder();
});

// app.get("/", (req: Request, res: Response) => {
//   res.send("Hello");
// });

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
