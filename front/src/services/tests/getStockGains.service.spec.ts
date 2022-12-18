import { getStockGains } from "../getStockGains.service";

describe("getStockGains service test", () => {
  jest.setTimeout(10000);
  it("should get data from service", async () => {
    const req = await getStockGains("vale", "2022-12-01", "10");

    expect(req.name).toEqual("vale");
    expect(req.capitalGains).toEqual(expect.any(Number));
    expect(req.lastPrice).toEqual(expect.any(Number));
    expect(req.priceAtDate).toEqual(expect.any(Number));
    expect(req.purchasedAmount).toEqual(10);
    expect(req.purchasedAt).toEqual("2022-12-01");
  });

  it("should try to get data from an unexists stock", async () => {
    const req = await getStockGains("teste", "2022-12-01", "10");

    expect(req).toEqual("Stock with name teste not found ");
  });
});
