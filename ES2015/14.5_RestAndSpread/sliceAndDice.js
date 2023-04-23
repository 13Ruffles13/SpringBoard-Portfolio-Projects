/*  remove a random element in the items array
    and return a new array without that item. 
*/
const removeRandomElement = (elements) => {
  let index = Math.floor(Math.random() * elements.length);
  return [...elements.slice(0, index), ...elements.slice(index + 1)];
};
console.log(removeRandomElement([1, 2, 3, 4, 5]));

/** Return a new array with every item in array1 and array2. */
const combineArrays = (array1, array2) => {
  return [...array1, ...array2];
};
console.log(combineArrays([1, 2, 3, 4], [5, 6, 7, 8]));

/** Return a new object with all the keys and values
from obj and a new key/value pair */
const addKeyPair = (obj, key, value) => {
  return { ...obj, [key]: value };
};
console.log(addKeyPair({ a: 1, b: 2, c: 3 }, "d", 4));

/** Return a new object with a key removed. */
const removeKey = (obj, key) => {
  let createObject = { ...obj };
  delete createObject[key];
  return createObject;
};
console.log(removeKey({ a: 1, b: 2, c: 3 }, "b"));

/** Combine two objects and return a new object. */
const combineObjects = (obj1, obj2) => {
  return {
    ...obj1,
    ...obj2,
  };
};
console.log(combineObjects({ a: 1, b: 2, c: 3 }, { d: 4, e: 5, f: 6 }));

/** Return a new object with a modified key and value. */
const mutateObject = (obj, key, value) => {
  let modifiedObject = { ...obj }; // get a copy of the object
  modifiedObject[key] = value;
  return modifiedObject;
};
console.log(mutateObject({ a: 1, b: 2, c: 5 }, "c", 6));
