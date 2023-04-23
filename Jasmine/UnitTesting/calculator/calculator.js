window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value,
  };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const defaultVals = { amount: 10000, years: 10, rate: 4.5 }; // DEFAULT
  const userAmount = document.getElementById("loan-amount");
  userAmount.value = defaultVals.amount;
  const userYears = document.getElementById("loan-years");
  userYears.value = defaultVals.years;
  const userRate = document.getElementById("loan-rate");
  userRate.value = defaultVals.rate;
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const getCurrentVals = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(getCurrentVals));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const monthlyR = values.rate / 100 / 12;
  const n = Math.floor(values.years * 12);
  return (
    (monthlyR * values.amount) /
    (1 - Math.pow(1 + monthlyR, -n))
  ).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const userMonthlyPays = document.getElementById("monthly-payment");
  userMonthlyPays.innerText = "$" + monthly;
}
