// Q1) What does the following code do?
new Set([1, 1, 2, 2, 3, 4]); // [1,2,3,4]

// Q2) What does the following code do?
//[...new Set("referee")].join("") // "ref" Removes duplicates

// Q3) What does the Map m look like after running the following code?
let m = new Map();
m.set([1, 2, 3], true); // 0: {Array(3) => true}
m.set([1, 2, 3], false); // 1: {Array(3) => false}

/*
    hasDuplicate() 
        Write a function called hasDuplicate which accepts an array and 
        returns true or false if that array contains a duplicate
*/
function hasDuplicate(arr) {
  return new Set(arr).size !== arr.length;
}
console.log(hasDuplicate([1, 3, 2, 1])); // true
console.log(hasDuplicate([1, 5, -1, 4])); // false

/*
    vowelCount()
        Write a function called vowelCount which accepts a string and returns a map where the keys 
        are numbers and the values are the count of the vowels in the string.
*/
const checkVowelCount = (char) => {
  return "aeiou".includes(char);
};
function vowelCount(str) {
  const vowelHashMap = new Map();
  for (let chars of str) {
    // for each character in the string
    let lowerCChar = chars.toLowerCase(); // convert the string to lower case
    if (checkVowelCount(lowerCChar)) {
      // if the key is a vowel perform a condition
      if (vowelHashMap.has(lowerCChar)) {
        vowelHashMap.set(lowerCChar, vowelHashMap.get(lowerCChar) + 1); // if the key already exists, increment the value
      } else {
        vowelHashMap.set(lowerCChar, 1); // if the key doesn't exist, add the key and value
      }
    }
  }
  return vowelHashMap;
}
console.log(vowelCount("awesome"));
console.log(vowelCount("Rafael"));
