import { dateFormat } from "../dateFormat.util";

describe("Test dateFormat funtion", () => {
  it("should format the recived date", () => {
    const date = dateFormat({ date: "2022-01-01" });

    expect(date).toEqual("Jan 01 2022 GMT-0300");
    expect(typeof date).toEqual("string");
  });

  it("should try to format an invalid date", () => {
    try {
      dateFormat({ date: "teste" });
    } catch (error) {
      if (error instanceof Error) {
        // eslint-disable-next-line jest/no-conditional-expect
        expect(error.message).toEqual("Invalid date format");
      }
    }
  });

  it("should format the recived date subtracting the followings params", () => {
    const date = dateFormat({ date: "2022-01-01", subAmount: 1, subUnitTime: "day" });

    expect(date).toEqual("Dec 31 2021 GMT-0300");
    expect(typeof date).toEqual("string");
  });
});
