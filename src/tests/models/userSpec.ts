// importing AppUser
import { AppUser } from "../../models/user";

// making an instance of it
const user = new AppUser();

// making a new suite
describe("testing the users model", (): void => {
  // tests that the index method is defined
  it("tests that the index method is defined", (): void => {
    expect(user.index).toBeDefined();
  });
  // tests that the show method is defined
  it("tests that the show method is defined", (): void => {
    expect(user.show).toBeDefined();
  });
  // tests that the create method is defined
  it("tests that the create method is defined", (): void => {
    expect(user.create).toBeDefined();
  });
  // create method should add a user
  it("create method should add a user", async (): Promise<void> => {
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
  // see if index is working
  it("see if index is working", async (): Promise<void> => {
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
  // see if show is working
  it("see if show is working", async (): Promise<void> => {
    const res = await user.show("2");
    expect(res).toEqual({
      id: 2,
      first_name: "Mark",
      last_name: "David",
      password: res.password,
    });
  });
  // see if the authentication in users model is working
  it("see if the authentication in users model is working", async (): Promise<void> => {
    const res = await user.authenticate({
      first_name: "Mark",
      last_name: "David",
      password: "M1990",
    });
    expect(res).toEqual({
      first_name: "Mark",
      last_name: "David",
      password: res?.password as unknown as string,
    });
  });
});
