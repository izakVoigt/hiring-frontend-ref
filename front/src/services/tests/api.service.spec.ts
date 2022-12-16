import { api } from "../api.service";

describe("API service test", () => {
  it("should get data from API", async () => {
    const req = await api.get("/stock/vale/quote");

    expect(req.status).toEqual(200);
    expect(req.data).toHaveProperty("name");
    expect(req.data).toHaveProperty("lastPrice");
    expect(req.data).toHaveProperty("pricedAt");
  });
});
