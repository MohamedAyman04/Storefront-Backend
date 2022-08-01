"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.users_routes = void 0;
const user_1 = require("../models/user");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const user = new user_1.AppUser();
dotenv_1.default.config();
const { TOKEN_SECRET } = process.env;
const index = async (req, res) => {
    try {
        const users = await user.index();
        try {
            jsonwebtoken_1.default.verify(req.body.token, TOKEN_SECRET);
        }
        catch (error) {
            res.status(401);
            res.send(`Invaled token ${error}`);
            return;
        }
        console.log(users);
        res.json(users);
    }
    catch (error) {
        res.send(`sorry there was an error ${error}`);
    }
};
const show = async (req, res) => {
    try {
        const tar = await user.show(req.params.id);
        console.log(tar);
        res.json(tar);
    }
    catch (error) {
        res.send(`sorry there was an error ${error}`);
    }
};
const create = async (req, res) => {
    try {
        const us = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            password: req.body.password,
        };
        const cer = await user.create(us);
        const token = jsonwebtoken_1.default.sign({ user: cer }, TOKEN_SECRET);
        console.log(token);
        res.json(token);
    }
    catch (error) {
        res.send(`sorry there was an error ${error}`);
    }
};
const Authenticate = async (req, res) => {
    try {
        const us = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            password: req.body.password,
        };
        const auth = await user.authenticate(us);
        const token = jsonwebtoken_1.default.sign({ user: auth }, TOKEN_SECRET);
        console.log(token);
        res.json(token);
    }
    catch (error) {
        res.send(`sorry there was an error ${error}`);
    }
};
const verifyAuthToken = (req, res, next) => {
    try {
        const authorizationHeader = req.headers.authorization;
        const token = authorizationHeader?.split(" ")[1];
        jsonwebtoken_1.default.verify(token, process.env.TOKEN_SECRET);
        next();
    }
    catch (error) {
        res.status(401);
        res.send(`invalid token ${error}`);
        return;
    }
};
const users_routes = (app) => {
    app.get("/users", verifyAuthToken, index);
    app.get("/users/:id", verifyAuthToken, show);
    app.post("/users", create);
    app.post("/authenticate", Authenticate);
};
exports.users_routes = users_routes;
