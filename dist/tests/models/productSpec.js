"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../../models/product");
const product = new product_1.AppProduct();
describe("testing the product model", () => {
    it("tests if the index is defined", () => {
        expect(product.index).toBeDefined();
    });
    it("tests if the show is defined", () => {
        expect(product.show).toBeDefined();
    });
    it("tests if the create is defined", () => {
        expect(product.create).toBeDefined();
    });
    it("create method should add a product", async () => {
        const res = await product.create({
            name: "iPhone",
            price: 1000,
        });
        expect(res).toEqual({
            id: 1,
            name: "iPhone",
            price: 1000,
        });
    });
    it("see if index is working", async () => {
        const res = await product.index();
        expect(res).toEqual([
            {
                id: 1,
                name: "iPhone",
                price: 1000,
            },
        ]);
    });
    it("see if show is working", async () => {
        const res = await product.show("1");
        expect(res).toEqual({
            id: 1,
            name: "iPhone",
            price: 1000,
        });
    });
});
