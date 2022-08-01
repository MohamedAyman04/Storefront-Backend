"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("../server");
const supertest_1 = __importDefault(require("supertest"));
describe("testing server", () => {
    it("tests if the address is the intended address", () => {
        expect(server_1.address).toEqual("http://localhost:4444");
    });
    it("expects the app to be truthy", () => {
        expect(server_1.app).toBeTruthy();
    });
    it("tests if the endpoint has a status of 200", async () => {
        const res = await (0, supertest_1.default)(server_1.app).get("/");
        expect(res.statusCode).toEqual(200);
    });
});
