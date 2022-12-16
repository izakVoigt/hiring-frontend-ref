import { percentageChange } from "../percentageChange.util";

describe("Test percentageChange function", () => {
  it("should return the percentage", () => {
    const percentage = percentageChange(1, 2);

    expect(percentage).toEqual("-50.00");
    expect(typeof percentage).toEqual("string");
  });
});
