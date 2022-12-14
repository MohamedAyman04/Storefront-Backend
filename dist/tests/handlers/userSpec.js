"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// importing libraries
const server_1 = require("../../server");
const supertest_1 = __importDefault(require("supertest"));
// making a suite
describe("testing the users", () => {
    // tests the index endpoint
    it("tests the index endpoint", async () => {
        const res = await (0, supertest_1.default)(server_1.app).get("/users");
        expect(res.statusCode).toEqual(200);
    });
    // tests the show endpoint
    it("tests the show endpoint", async () => {
        const res = await (0, supertest_1.default)(server_1.app).get("/users/1");
        expect(res.statusCode).toEqual(200);
    });
    // tests the create endpoint
    it("tests the create endpoint", async () => {
        const res = await (0, supertest_1.default)(server_1.app).post("/users");
        expect(res.statusCode).toEqual(200);
    });
    // tests the authenticate endpoint
    it("tests the authenticate endpoint", async () => {
        const res = await (0, supertest_1.default)(server_1.app).post("/authenticate");
        expect(res.statusCode).toEqual(200);
    });
});
