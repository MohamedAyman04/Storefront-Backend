// importing the libraries
import { app } from "../../server";
import supertest from "supertest";

// making a suite
describe("testing the orders", (): void => {
  // tests index endpoint
  it("tests index endpoint", async (): Promise<void> => {
    const res = await supertest(app).get("/orders");
    expect(res.statusCode).toEqual(200);
  });
  // tests the show endpoint
  it("tests the show endpoint", async (): Promise<void> => {
    const res = await supertest(app).get("/orders/1");
    expect(res.statusCode).toEqual(200);
  });
  // tests the create endpoint
  it("tests the create endpoint", async (): Promise<void> => {
    const res = await supertest(app).post("/orders");
    expect(res.statusCode).toEqual(200);
  });
  // tests the add product endpoint
  it("tests the add product endpoint", async (): Promise<void> => {
    const res = await supertest(app).post("/orders/1/products");
    expect(res.statusCode).toEqual(200);
  });
});
