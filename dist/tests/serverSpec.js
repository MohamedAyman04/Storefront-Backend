"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// importing libraries
const server_1 = require("../server");
const supertest_1 = __importDefault(require("supertest"));
// making a suite
describe("testing server", () => {
    // tests if the address is the intended address
    it("tests if the address is the intended address", () => {
        expect(server_1.address).toEqual("http://localhost:4444");
    });
    // expects the app to be truthy
    it("expects the app to be truthy", () => {
        expect(server_1.app).toBeTruthy();
    });
    // tests if the endpoint has a status of 200
    it("tests if the endpoint has a status of 200", async () => {
        const res = await (0, supertest_1.default)(server_1.app).get("/");
        expect(res.statusCode).toEqual(200);
    });
});
