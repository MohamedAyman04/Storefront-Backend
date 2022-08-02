"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.address = exports.app = void 0;
// importing libraries
var express_1 = __importDefault(require("express"));
var user_1 = require("./handlers/user");
var product_1 = require("./handlers/product");
var order_1 = require("./handlers/order");
var body_parser_1 = __importDefault(require("body-parser"));
// defining the app and address
var app = (0, express_1["default"])();
exports.app = app;
var address = "http://localhost:4444";
exports.address = address;
// using middlewares
app.use(express_1["default"].urlencoded({ extended: false }));
app.use(body_parser_1["default"].json());
// adding the endpoints to the server
(0, user_1.users_routes)(app);
(0, product_1.products_routes)(app);
(0, order_1.orders_routes)(app);
// get method to output welcome to the api
app.get("/", function (_req, res) {
    res.send("Welcome to the API!");
});
// listening on port 4444 to start the server
app.listen(4444, function () {
    console.log("starting app on: ".concat(address));
});
