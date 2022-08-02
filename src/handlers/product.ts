// importing libraries
import { Request, Response, Application, NextFunction } from "express";
import { Product, AppProduct } from "../models/product";
import jwt, { Secret } from "jsonwebtoken";

// making an instance from AppProduct
const product = new AppProduct();

// creating the index function to be used in the endpoint
const index = async (_req: Request, res: Response): Promise<void> => {
  try {
    const products = await product.index();
    console.log(products);
    res.json(products);
  } catch (error) {
    res.send(`sorry there was an error ${error}`);
  }
};

// creating the show function to be used in the endpoint
const show = async (req: Request, res: Response): Promise<void> => {
  try {
    const tar = await product.show(req.params.id);
    console.log(tar);
    res.json(tar);
  } catch (error) {
    res.send(`sorry there was an error ${error}`);
  }
};

// creating the create function to be used in the endpoint
const create = async (req: Request, res: Response): Promise<void> => {
  try {
    const pr: Product = {
      name: req.body.name,
      price: req.body.price,
    };
    const cer = await product.create(pr);
    console.log(cer);
    res.json(cer);
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
    res.status(401);
    res.send(`invalid token ${error}`);
    return;
  }
};

// exporting a function to be used in server and adding it's neccessary endpoints
export const products_routes = (app: Application): void => {
  app.get("/products", index);
  app.get("/products/:id", show);
  app.post("/products", verifyAuthToken, create);
};
