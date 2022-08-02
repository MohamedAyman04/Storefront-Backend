// importing libraries
import { Request, Response, Application, NextFunction } from "express";
import { AppUser, User } from "../models/user";
import jwt, { Secret } from "jsonwebtoken";
import dotenv from "dotenv";

// making an instance from AppUser
const user = new AppUser();

// configuring the dotenv and taking TOKEN_SECRET
dotenv.config();
const { TOKEN_SECRET } = process.env;

// creating the index function to be used in the endpoint
const index = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await user.index();
    console.log(users);
    res.json(users);
  } catch (error) {
    res.send(`sorry there was an error ${error}`);
  }
};

// creating the show function to be used in the endpoint
const show = async (req: Request, res: Response): Promise<void> => {
  try {
    const tar = await user.show(req.params.id);
    console.log(tar);
    res.json(tar);
  } catch (error) {
    res.send(`sorry there was an error ${error}`);
  }
};

// creating the create function to be used in the endpoint and adding a token
const create = async (req: Request, res: Response): Promise<void> => {
  try {
    const us: User = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      password: req.body.password,
    };
    const cer = await user.create(us);
    const token = jwt.sign({ user: cer }, TOKEN_SECRET as unknown as Secret);
    console.log(token);
    res.json(token);
  } catch (error) {
    res.send(`sorry there was an error ${error}`);
  }
};

// Authenticating the user and adding a token
const Authenticate = async (req: Request, res: Response): Promise<void> => {
  try {
    const us: User = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      password: req.body.password,
    };
    const auth = await user.authenticate(us);
    const token = jwt.sign({ user: auth }, TOKEN_SECRET as unknown as Secret);
    console.log(token);
    res.json(token);
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
export const users_routes = (app: Application): void => {
  app.get("/users", verifyAuthToken, index);
  app.get("/users/:id", verifyAuthToken, show);
  app.post("/users", create);
  app.post("/authenticate", Authenticate);
};
