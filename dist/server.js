"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.address = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("./handlers/user");
const product_1 = require("./handlers/product");
const order_1 = require("./handlers/order");
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
exports.app = app;
const address = "http://localhost:4444";
exports.address = address;
app.use(express_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
(0, user_1.users_routes)(app);
(0, product_1.products_routes)(app);
(0, order_1.orders_routes)(app);
app.get("/", function (_req, res) {
    res.send("Welcome to the API!");
});
app.listen(4444, function () {
    console.log(`starting app on: ${address}`);
});
