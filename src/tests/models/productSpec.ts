// importing AppProduct
import { AppProduct } from "../../models/product";

// making an instance of it
const product = new AppProduct();

// making a new suite
describe("testing the product model", (): void => {
  // tests if the index is defined
  it("tests if the index is defined", (): void => {
    expect(product.index).toBeDefined();
  });
  // tests if the show is defined
  it("tests if the show is defined", (): void => {
    expect(product.show).toBeDefined();
  });
  // tests if the create is defined
  it("tests if the create is defined", (): void => {
    expect(product.create).toBeDefined();
  });
  // create method should add a product
  it("create method should add a product", async (): Promise<void> => {
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
  it("see if index is working", async (): Promise<void> => {
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
  it("see if show is working", async (): Promise<void> => {
    const res = await product.show("1");
    expect(res).toEqual({
      id: 1,
      name: "iPhone",
      price: 1000,
    });
  });
});
