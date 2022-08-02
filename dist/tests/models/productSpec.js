"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// importing AppProduct
const product_1 = require("../../models/product");
// making an instance of it
const product = new product_1.AppProduct();
// making a new suite
describe("testing the product model", () => {
    // tests if the index is defined
    it("tests if the index is defined", () => {
        expect(product.index).toBeDefined();
    });
    // tests if the show is defined
    it("tests if the show is defined", () => {
        expect(product.show).toBeDefined();
    });
    // tests if the create is defined
    it("tests if the create is defined", () => {
        expect(product.create).toBeDefined();
    });
    // create method should add a product
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
    // see if index is working
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
    // see if show is working
    it("see if show is working", async () => {
        const res = await product.show("1");
        expect(res).toEqual({
            id: 1,
            name: "iPhone",
            price: 1000,
        });
    });
});
