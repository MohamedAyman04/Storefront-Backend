// importing libraries
import { app, address } from "../server";
import supertest from "supertest";

// making a suite
describe("testing server", (): void => {
  // tests if the address is the intended address
  it("tests if the address is the intended address", (): void => {
    expect(address).toEqual("http://localhost:4444");
  });
  // expects the app to be truthy
  it("expects the app to be truthy", (): void => {
    expect(app).toBeTruthy();
  });
  // tests if the endpoint has a status of 200
  it("tests if the endpoint has a status of 200", async (): Promise<void> => {
    const res = await supertest(app).get("/");
    expect(res.statusCode).toEqual(200);
  });
});
