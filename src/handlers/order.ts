// importing libraries
import { Request, Response, Application, NextFunction } from "express";
import { AppOrder, Order } from "../models/order";
import jwt, { Secret } from "jsonwebtoken";

// making an instance of AppOrder()
const order = new AppOrder();

// creating the index function to be used in the endpoint
const index = async (_req: Request, res: Response): Promise<void> => {
  try {
    const orders = await order.index();
    console.log(orders);
    res.json(orders);
  } catch (error) {
    res.send(`sorry there was an error ${error}`);
  }
};

// creating the show function to be used in the endpoint
const show = async (req: Request, res: Response): Promise<void> => {
  try {
    const tar = await order.show(req.params.id);
    console.log(tar);
    res.json(tar);
  } catch (error) {
    res.send(`sorry there was an error ${error}`);
  }
};

// creating the create function to be used in the endpoint
const create = async (req: Request, res: Response): Promise<void> => {
  try {
    const or: Order = {
      user_id: req.body.user_id,
      status: req.body.status,
    };
    const cer = await order.create(or);
    console.log(cer);
    res.json(cer);
  } catch (error) {
    res.send(`sorry there was an error ${error}`);
  }
};

// creating the addProduct function to be used in the endpoint
const addProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const quantity = req.body.quantity;
    const order_id = req.params.id;
    const product_id = req.body.product_id;
    const pro = await order.addProduct(quantity, order_id, product_id);
    console.log(pro);
    res.json(pro);
  } catch (error) {
    res.send(`sorry there was an error ${error}`);
  }
};

// creating a function to verifing the token
const verifyAuthToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const authorizationHeader = req.headers.authorization;
    const token = authorizationHeader?.split(" ")[1];
    jwt.verify(
      token as unknown as string,
      process.env.TOKEN_SECRET as unknown as Secret
    );
    next();
  } catch (error) {
    res.send(`invalid token ${error}`);
    return;
  }
};

// exporting a function to be used in server and adding it's neccessary endpoints
export const orders_routes = (app: Application): void => {
  app.get("/orders", verifyAuthToken, index);
  app.get("/orders/:id", verifyAuthToken, show);
  app.post("/orders", verifyAuthToken, create);
  app.post("/orders/:id/products", verifyAuthToken, addProduct);
};
