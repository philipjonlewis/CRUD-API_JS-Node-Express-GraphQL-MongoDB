import "dotenv/config";
import { graphqlHTTP } from "express-graphql";

import express, {
  Application,
  NextFunction,
  Request,
  Response,
  RequestHandler,
} from "express";

import schema from "./schema/schema";

import bodyParser from "body-parser";

const app: Application = express();

// app.get("/", (req: Request, res: Response) => {
//   res.send("Hello");
// });

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(3000, () => {
  console.log("Server Live");
});
