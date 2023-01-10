const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
  test("works for 1234", () => {
    expect(addCommas(1234)).toBe("1,234");
  })
  test("works for 1000000", () => {
    expect(addCommas(1000000)).toBe("1,000,000");
  })
  test("works for 9876543210", () => {
    expect(addCommas(9876543210)).toBe("9,876,543,210");
  })
  test("works for 6", () => {
    expect(addCommas(6)).toBe("6");
  })
  test("works for -10", () => {
    expect(addCommas(-10)).toBe("-10");
  })
  test("works for -5678", () => {
    expect(addCommas(-5678)).toBe("-5,678");
  })
  test("works for -76125678", () => {
    expect(addCommas(-76125678)).toBe("-76,125,678");
  })
  test("works for 96425231", () => {
    expect(addCommas(96425231)).toBe("96,425,231");
  })
  test("works for 137425231", () => {
    expect(addCommas(137425231)).toBe("137,425,231");
  })
  test("works for 423638", () => {
    expect(addCommas(423638)).toBe("423,638");
  })
  test("works for 12345.678", () => {
    expect(addCommas(12345.678)).toBe("12,345.678");
  })
  test("works for -3141592.65", () => {
    expect(addCommas(-3141592.65)).toBe("-3,141,592.65");
  })
});
