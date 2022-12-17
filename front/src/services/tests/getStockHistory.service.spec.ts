import { getStockHistory } from "../getStockHistory.service";

describe("getStockHistory service test", () => {
  jest.setTimeout(10000);
  it("should get data from service", async () => {
    const req = await getStockHistory("vale");

    expect(req.name).toEqual("vale");
    expect(req.prices[0].closing).toEqual(expect.any(Number));
    expect(req.prices[0].high).toEqual(expect.any(Number));
    expect(req.prices[0].low).toEqual(expect.any(Number));
    expect(req.prices[0].opening).toEqual(expect.any(Number));
  });

  it("should try to get data from an unexists stock", async () => {
    const req = await getStockHistory("teste");

    expect(req).toEqual("Stock with name teste not found ");
  });
});
