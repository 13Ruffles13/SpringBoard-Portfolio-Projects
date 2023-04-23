it("should calculate the monthly rate correctly", function () {
  // ...
  const values = {
    amount: 10070,
    years: 8,
    rate: 5.8,
  };
  expect(calculateMonthlyPayment(values)).toEqual("131.36");
});

it("should return a result with 2 decimal places", function () {
  // ..
  const values = {
    amount: 12000,
    years: 8,
    rate: 5.8,
  };
  expect(calculateMonthlyPayment(values)).toEqual("156.53");
});

/// etc

it("should handle terribly high interest rates", function () {
  const values = {
    amount: 500,
    years: 40,
    rate: 99,
  };
  expect(calculateMonthlyPayment(values)).toEqual("41.25");
});
