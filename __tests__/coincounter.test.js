import { coinCounter } from "./../src/counter.js";

describe("coinCounter", () => {

  test("should identify that NaN values are invalid", () => {
    expect(coinCounter("abc")).toEqual("Invalid input!");
  });

  test("should identify negative values as invalid", () => {
    expect(coinCounter(-2)).toEqual("Invalid input!");
  });

});
