import { coinCounter } from "./../src/counter.js";
import { clearCounter } from "./../src/counter.js";

describe("coinCounter", () => {
  // beforeEach(() => {
  //   let coinDict = {};
  // });
  const coinDict = {};

  beforeEach(() => {
    delete coinDict["quarters"];
    delete coinDict["dimes"];
    delete coinDict["nickels"];
    delete coinDict["pennies"];
  });

  test("should identify that NaN values are invalid", () => {
    expect(coinCounter("abc", coinDict)).toEqual("Invalid input!");
  });

  test("should identify negative values as invalid", () => {
    expect(coinCounter(-2, coinDict)).toEqual("Invalid input!");
  });

  test("should identify a whole number of quarters", () => {
    expect(coinCounter(0.25, coinDict)).toEqual({ "quarters": 1 });
  });

  test("should identify a whole number of dimes", () => {
    expect(coinCounter(0.20, coinDict)).toEqual({ "dimes": 2 });
  });

  test("should identify a whole number of nickels", () => {
    expect(coinCounter(0.05, coinDict)).toEqual({ "nickels": 1 });
  });

  test("should identify a whole number of pennies", () => {
    expect(coinCounter(0.04, coinDict)).toEqual({ "pennies": 4 });
  });

  test("should identify a mixture of quarters, dimes, nickels, and pennies", () => {
    expect(coinCounter(0.99, coinDict)).toEqual({ "quarters": 3, "dimes": 2, "pennies": 4 })
  })

});
