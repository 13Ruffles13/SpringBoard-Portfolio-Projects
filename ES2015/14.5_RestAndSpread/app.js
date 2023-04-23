/* ----- Refractor  ES5 Code ----- */
function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function (num) {
    return num % 2 === 0;
  });
}

/* ----- Refractor using rest op. & arrow func. ----- */
// Take array of numbers and return a new array with only the odd numbers.
const filterOutOdds2 = (...nums) => nums.filter((num) => num % 2 === 0);
console.log(filterOutOdds2(1, 2, 7, 3, -1));

//findMin
const findMin = (...args) => Math.min(...args);
console.log(findMin(1, 4, 12, -3));

//mergeObjects
const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });
console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }));

//doubleAndReturnArgs
const doubleAndReturnArgs = (arr, ...args) => [
  ...arr, // all arr elements
  ...args.map((arg) => arg * 2), // Create a new array with doubled values
];
console.log(doubleAndReturnArgs([1, 2, 3], 4, 4));
console.log(doubleAndReturnArgs([2], 10, 4));
