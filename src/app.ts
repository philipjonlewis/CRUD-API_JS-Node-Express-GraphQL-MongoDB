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


import { graphQLSchema } from "./GraphQL/mainGraphQLSchema";

import bodyParser from "body-parser";

const app: Application = express();
databaseConnection();


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
