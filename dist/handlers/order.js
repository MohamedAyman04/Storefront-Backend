"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orders_routes = void 0;
const order_1 = require("../models/order");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const order = new order_1.AppOrder();
const index = async (_req, res) => {
    try {
        const orders = await order.index();
        console.log(orders);
        res.json(orders);
    }
    catch (error) {
        res.send(`sorry there was an error ${error}`);
    }
};
const show = async (req, res) => {
    try {
        const tar = await order.show(req.params.id);
        console.log(tar);
        res.json(tar);
    }
    catch (error) {
        res.send(`sorry there was an error ${error}`);
    }
};
const create = async (req, res) => {
    try {
        const or = {
            user_id: req.body.user_id,
            status: req.body.status,
        };
        const cer = await order.create(or);
        console.log(cer);
        res.json(cer);
    }
    catch (error) {
        res.send(`sorry there was an error ${error}`);
    }
};
const addProduct = async (req, res) => {
    try {
        const quantity = req.body.quantity;
        const order_id = req.params.id;
        const product_id = req.body.product_id;
        const pro = await order.addProduct(quantity, order_id, product_id);
        console.log(pro);
        res.json(pro);
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
const orders_routes = (app) => {
    app.get("/orders", verifyAuthToken, index);
    app.get("/orders/:id", verifyAuthToken, show);
    app.post("/orders", verifyAuthToken, create);
    app.post("/orders/:id/products", verifyAuthToken, addProduct);
};
exports.orders_routes = orders_routes;
