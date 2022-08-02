// importing libraries
import { app } from "../../server";
import supertest from "supertest";

// making a suite
describe("testing the users", (): void => {
  // tests the index endpoint
  it("tests the index endpoint", async (): Promise<void> => {
    const res = await supertest(app).get("/users");
    expect(res.statusCode).toEqual(200);
  });
  // tests the show endpoint
  it("tests the show endpoint", async (): Promise<void> => {
    const res = await supertest(app).get("/users/1");
    expect(res.statusCode).toEqual(200);
  });
  // tests the create endpoint
  it("tests the create endpoint", async (): Promise<void> => {
    const res = await supertest(app).post("/users");
    expect(res.statusCode).toEqual(200);
  });
  // tests the authenticate endpoint
  it("tests the authenticate endpoint", async (): Promise<void> => {
    const res = await supertest(app).post("/authenticate");
    expect(res.statusCode).toEqual(200);
  });
});
