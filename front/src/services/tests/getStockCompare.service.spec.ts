import { getStockCompare } from "../getStockCompare.service";

describe("getStockCompare service test", () => {
  jest.setTimeout(10000);
  it("should get data from service", async () => {
    const list = ["vale", "r"];
    const req = await getStockCompare(list);

    expect(req.lastPrices.length).toEqual(list.length);
    expect(req.lastPrices[0].name).toEqual("VALE");
    expect(req.lastPrices[0].lastPrice).toEqual(expect.any(Number));
    expect(req.lastPrices[0].pricedAt).toEqual(expect.any(String));
    expect(req.lastPrices[1].name).toEqual("R");
    expect(req.lastPrices[1].lastPrice).toEqual(expect.any(Number));
    expect(req.lastPrices[1].pricedAt).toEqual(expect.any(String));
  });

  it("should try to get data from two unexists stock", async () => {
    const list = ["teste", "test"];
    const req = await getStockCompare(list);

    expect(req).toEqual("Stock with name teste not found ");
  });
});
