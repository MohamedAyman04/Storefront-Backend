"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const order_1 = require("../../models/order");
const order = new order_1.AppOrder();
describe("testing the order model", () => {
    it("tests if the index is defined", () => {
        expect(order.index).toBeDefined();
    });
    it("tests if the show is defined", () => {
        expect(order.show).toBeDefined();
    });
    it("tests if the create is defined", () => {
        expect(order.create).toBeDefined();
    });
    it("tests if the addProduct is defined", () => {
        expect(order.addProduct).toBeDefined();
    });
    it("create method should add a order", async () => {
        const res = await order.create({
            status: "active",
            user_id: "2",
        });
        expect(res).toEqual({
            id: 1,
            status: "active",
            user_id: "2",
        });
    });
    it("see if index is working", async () => {
        const res = await order.index();
        expect(res).toEqual([
            {
                id: 1,
                status: "active",
                user_id: "2",
            },
        ]);
    });
    it("see if show is working", async () => {
        const res = await order.show("2");
        expect(res).toEqual({
            id: 1,
            status: "active",
            user_id: "2",
        });
    });
});
