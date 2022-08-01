"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("../../server");
const supertest_1 = __importDefault(require("supertest"));
describe("testing the products", () => {
    it("tests index endpoint", async () => {
        const res = await (0, supertest_1.default)(server_1.app).get("/products");
        expect(res.statusCode).toEqual(401);
    });
    it("tests the show endpoint", async () => {
        const res = await (0, supertest_1.default)(server_1.app).get("/products/1");
        expect(res.statusCode).toEqual(401);
    });
    it("tests the create endpoint", async () => {
        const res = await (0, supertest_1.default)(server_1.app).post("/products");
        expect(res.statusCode).toEqual(401);
    });
});
