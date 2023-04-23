/* ----- ES5 Map Callback -----*/
function double(arr) {
  return arr.map(function (val) {
    return val * 2;
  });
}

/* ----- ES2015 Map Callback -----*/

//TODO: Task 1 Refactor the above code to use two arrow functions. Turn it into a one-liner.
const makeDouble = (arr) => arr.map((val) => val * 2); // ES2015

//TODO: Task 2 Replace ALL functions with arrow functions
function squareAndFindEvens(numbers) {
  var squares = numbers.map(function (num) {
    return num ** 2;
  });
  var evens = squares.filter(function (square) {
    return square % 2 === 0;
  });
  return evens;
}

const squareAndFindEvens2 = (numbers) =>
  numbers.map((num) => num ** 2).filter((square) => square % 2 === 0);
