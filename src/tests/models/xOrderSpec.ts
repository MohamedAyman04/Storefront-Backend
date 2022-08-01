// importing AppOrder
import { AppOrder } from "../../models/order";

// making an instance of it
const order = new AppOrder();

// making a new suite
describe("testing the order model", (): void => {
  // tests if the index is defined
  it("tests if the index is defined", (): void => {
    expect(order.index).toBeDefined();
  });
  // tests if the show is defined
  it("tests if the show is defined", (): void => {
    expect(order.show).toBeDefined();
  });
  // tests if the create is defined
  it("tests if the create is defined", (): void => {
    expect(order.create).toBeDefined();
  });
  // tests if the addProduct is defined
  it("tests if the addProduct is defined", (): void => {
    expect(order.addProduct).toBeDefined();
  });
  // create method should add a order
  it("create method should add a order", async (): Promise<void> => {
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
  // see if index is working
  it("see if index is working", async (): Promise<void> => {
    const res = await order.index();
    expect(res).toEqual([
      {
        id: 1,
        status: "active",
        user_id: "2",
      },
    ]);
  });
  // see if show is working
  it("see if show is working", async (): Promise<void> => {
    const res = await order.show("2");
    expect(res).toEqual({
      id: 1,
      status: "active",
      user_id: "2",
    });
  });
});
