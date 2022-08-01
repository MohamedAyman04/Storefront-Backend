// importing libraries
import express, { Request, Response } from "express";
import { users_routes } from "./handlers/user";
import { products_routes } from "./handlers/product";
import { orders_routes } from "./handlers/order";
import bodyParser from "body-parser";

// defining the app and address
const app: express.Application = express();
const address: string = "http://localhost:4444";

// using middlewares
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

// adding the endpoints to the server
users_routes(app);
products_routes(app);
orders_routes(app);

// get method to output welcome to the api
app.get("/", function (_req: Request, res: Response): void {
  res.send("Welcome to the API!");
});

// listening on port 4444 to start the server
app.listen(4444, function (): void {
  console.log(`starting app on: ${address}`);
});

// exporting for testing
export { app, address };
