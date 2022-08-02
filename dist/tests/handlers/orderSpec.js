"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// importing the libraries
const server_1 = require("../../server");
const supertest_1 = __importDefault(require("supertest"));
// making a suite
describe("testing the orders", () => {
    // tests index endpoint
    it("tests index endpoint", async () => {
        const res = await (0, supertest_1.default)(server_1.app).get("/orders");
        expect(res.statusCode).toEqual(200);
    });
    // tests the show endpoint
    it("tests the show endpoint", async () => {
        const res = await (0, supertest_1.default)(server_1.app).get("/orders/1");
        expect(res.statusCode).toEqual(200);
    });
    // tests the create endpoint
    it("tests the create endpoint", async () => {
        const res = await (0, supertest_1.default)(server_1.app).post("/orders");
        expect(res.statusCode).toEqual(200);
    });
    // tests the add product endpoint
    it("tests the add product endpoint", async () => {
        const res = await (0, supertest_1.default)(server_1.app).post("/orders/1/products");
        expect(res.statusCode).toEqual(200);
    });
});
