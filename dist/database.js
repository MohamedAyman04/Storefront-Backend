"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
// importing libraries
var pg_1 = require("pg");
var dotenv_1 = __importDefault(require("dotenv"));
// configuring dotenv
dotenv_1["default"].config();
// adding the dotenv data
var _a = process.env, POSTGRES_HOST = _a.POSTGRES_HOST, POSTGRES_DB = _a.POSTGRES_DB, POSTGRES_USER = _a.POSTGRES_USER, POSTGRES_PASSWORD = _a.POSTGRES_PASSWORD, POSTGRES_TEST_DB = _a.POSTGRES_TEST_DB, POSTGRES_PORT = _a.POSTGRES_PORT, ENV = _a.ENV;
// defining the Client
var Client = new pg_1.Pool({
    host: POSTGRES_HOST,
    database: POSTGRES_TEST_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    port: Number(POSTGRES_PORT)
});
// logging the ENV
console.log(ENV);
// checking if the ENV is dev to begin development mode with the database data
if (ENV === "dev") {
    Client = new pg_1.Pool({
        host: POSTGRES_HOST,
        database: POSTGRES_DB,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD,
        port: Number(POSTGRES_PORT)
    });
    console.log("went dev");
}
// checking if the ENV is test to begin testing mode with the database testing_data
if (ENV === "test") {
    Client = new pg_1.Pool({
        host: POSTGRES_HOST,
        database: POSTGRES_TEST_DB,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD,
        port: Number(POSTGRES_PORT)
    });
    console.log("went test");
}
// exporting Client for the models
exports["default"] = Client;
