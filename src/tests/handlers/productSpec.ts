// importing the libraries
import { app } from "../../server";
import supertest from "supertest";

// making a suite
describe("testing the products", (): void => {
  // tests index endpoint
  it("tests index endpoint", async (): Promise<void> => {
    const res = await supertest(app).get("/products");
    expect(res.statusCode).toEqual(200);
  });
  // tests the show endpoint
  it("tests the show endpoint", async (): Promise<void> => {
    const res = await supertest(app).get("/products/1");
    expect(res.statusCode).toEqual(200);
  });
  // tests the create endpoint
  it("tests the create endpoint", async (): Promise<void> => {
    const res = await supertest(app).post("/products");
    expect(res.statusCode).toEqual(200);
  });
});
