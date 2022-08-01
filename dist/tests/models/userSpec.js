"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../../models/user");
const user = new user_1.AppUser();
describe("testing the users model", () => {
    it("tests that the index method is defined", () => {
        expect(user.index).toBeDefined();
    });
    it("tests that the show method is defined", () => {
        expect(user.show).toBeDefined();
    });
    it("tests that the create method is defined", () => {
        expect(user.create).toBeDefined();
    });
    it("create method should add a user", async () => {
        const res = await user.create({
            first_name: "Mark",
            last_name: "David",
            password: "M1990",
        });
        expect(res).toEqual({
            id: 2,
            first_name: "Mark",
            last_name: "David",
            password: res.password,
        });
    });
    it("see if index is working", async () => {
        const res = await user.index();
        expect(res).toEqual([
            {
                id: 2,
                first_name: "Mark",
                last_name: "David",
                password: res[0].password,
            },
        ]);
    });
    it("see if show is working", async () => {
        const res = await user.show("2");
        expect(res).toEqual({
            id: 2,
            first_name: "Mark",
            last_name: "David",
            password: res.password,
        });
    });
    it("see if the authentication in users model is working", async () => {
        const res = await user.authenticate({
            first_name: "Mark",
            last_name: "David",
            password: "M1990",
        });
        expect(res).toEqual({
            first_name: "Mark",
            last_name: "David",
            password: res?.password,
        });
    });
});
