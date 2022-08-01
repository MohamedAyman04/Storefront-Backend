"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.products_routes = void 0;
const product_1 = require("../models/product");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const product = new product_1.AppProduct();
const index = async (_req, res) => {
    try {
        const products = await product.index();
        console.log(products);
        res.json(products);
    }
    catch (error) {
        res.send(`sorry there was an error ${error}`);
    }
};
const show = async (req, res) => {
    try {
        const tar = await product.show(req.params.id);
        console.log(tar);
        res.json(tar);
    }
    catch (error) {
        res.send(`sorry there was an error ${error}`);
    }
};
const create = async (req, res) => {
    try {
        const pr = {
            name: req.body.name,
            price: req.body.price,
        };
        const cer = await product.create(pr);
        console.log(cer);
        res.json(cer);
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
const products_routes = (app) => {
    app.get("/products", verifyAuthToken, index);
    app.get("/products/:id", verifyAuthToken, show);
    app.post("/products", verifyAuthToken, create);
};
exports.products_routes = products_routes;
