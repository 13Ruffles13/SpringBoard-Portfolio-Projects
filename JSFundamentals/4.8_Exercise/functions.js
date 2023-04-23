/*
    1. TODO: Difference
        this function takes in two parameters and returns the difference of the two;
    
    2. TODO: Product
        this function takes in two parameters and returns the product of the two;
    
    3. TODO: printDay
        this function takes in one parameter (a number from 1-7) and returns the day of the week 
        (1 is Sunday, 2 is Monday, 3 is Tuesday etc.). If the number is less than 1 or greater 
        than 7, the function should return undefined;
    
    4. TODO: lastElement
        this function takes in one parameter (an array) and returns the last value in the array. 
        It should return undefined if the array is empty.
      
    5. TODO: numberCompare
        this function takes in two parameters (both numbers). If the first is greater than the second, 
        this function returns “First is greater”. If the second number is greater than the first, 
        the function returns “Second is greater”. Otherwise the function returns “Numbers are equal”
    
    6. TODO: singleLetterCount
        this function takes in two parameters (two strings). The first parameter should be a word and the 
        second should be a letter. The function returns the number of times that letter appears in the word. 
        The function should be case insensitive (does not matter if the input is lowercase or uppercase). 
        If the letter is not found in the word, the function should return 0.
    
    7. TODO: multipleLetterCount
        this function takes in one parameter (a string) and returns an object with the keys being the 
        letters and the values being the count of the letter.

    8. TODO: arrayManipulation
        this function should take in at most four parameters (an array, command, location, and value).
          If the command is “remove” and the location is “end”, the function should remove the last 
          value in the array and return the value removed. (In this case, the function only needs three arguments.)

          If the command is “remove” and the location is “beginning”, the function should remove the first value 
          in the array and return the value removed. (In this case, the function only needs three arguments.)

          If the command is “add” and the location is “beginning”, the function should add the value 
          (fourth parameter) to the beginning of the array and return the array.

          If the command is “add” and the location is “end”, the function should add the value (fourth parameter) 
          to the end of the array and return the array.

    9. TODO: isPalindrome
        A Palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or 
        forward. This function should take in one parameter and returns true or false if it is a palindrome. As 
        a bonus, allow your function to ignore whitespace and capitalization so that isPalindrome(‘a man a plan 
        a canal Panama’); returns true
*/
function difference(num1, num2) {
  return num1 - num2;
}

function product(num1, num2) {
  return num1 * num2;
}

function printDay(number) {
  const weekNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  if (number <= 7 && number >= 1) return weekNames[number - 1];
}

function lastElement(arr) {
  if (arr === null) return undefined;
  for (index of arr) {
    if (arr[index] === arr.length) {
      return arr[index];
    }
  }
}

function numberCompare(num1, num2) {
  if (num1 > num2) return console.log("First is greater");
  else if (num1 < num2) return console.log("Second is greater");
  else return console.log("Numbers are equal");
}

function singleLetterCount(string1, string2) {
  let conversion1 = string1.toLowerCase();
  let conversion2 = string2.toLowerCase();
  let countOccurs = 0;
  if (conversion1.length > 1 && conversion2.length > 0) {
    for (chars of conversion1) {
      if (chars === conversion2) countOccurs++;
    }
  }
  return countOccurs;
}

function multipleLetterCount(string) {
  let spliceString = string.split("");
  let occurrencesOfLetters = {};
  for (char of spliceString) {
    if (occurrencesOfLetters[char]) {
      occurrencesOfLetters[char] += 1;
      continue;
    }
    occurrencesOfLetters[char] = 1;
  }
  return occurrencesOfLetters;
}

function arrayManipulation(arr, command, location, value) {
  for (elements of arr) {
    //Commands
    if (command === "remove" && location === "end" && elements === arr.length) {
      value = elements;
      arr.pop();
      return value;
    }
    if (command === "remove" && location === "beginning" && elements === 1) {
      value = elements;
      arr.shift();
      return value;
    }
    if (command === "add" && location === "beginning" && elements === 1) {
      arr.unshift(value);
      return arr;
    }
    if (command === "add" && location === "end" && elements === arr.length) {
      arr.push(value);
      return arr;
    }
  }
  return console.log("An array, command, & location arguments are needed!");
}

function isPalindrome(chars) {
  //Reads the same backward or forward
  let lowerChars = chars.toLowerCase();
  //Continue to ignore whitespace and capitalization.
  let readCharsForward = 0;
  for (
    let readCharsBackwards = lowerChars.length - 1;
    readCharsBackwards > 0;
    readCharsBackwards--
  ) {
    if (lowerChars[readCharsForward].indexOf(" ") >= 0) {
      readCharsForward++;
      readCharsBackwards++;
      continue;
    }
    if (lowerChars[readCharsBackwards].indexOf(" ") >= 0) {
      readCharsBackwards--;
      readCharsForward++;
      continue;
    }
    if (lowerChars[readCharsBackwards] !== lowerChars[readCharsForward]) {
      return false; //Since chars isNotPalindrome
    }
    readCharsForward++;
  } //for loop
  return true;
}

let diffOfTwoNums = difference(2, 2);
console.log("===Difference===");
console.log(`The difference is: ${diffOfTwoNums}`);
diffOfTwoNums = difference(0, 2);
console.log(`The difference is: ${diffOfTwoNums}`);
console.log("\n");

console.log("===Product===");
let productOfTwoNums = product(2, 2);
console.log(`The product is: ${productOfTwoNums}`);
productOfTwoNums = product(0, 2);
console.log(`The product is: ${productOfTwoNums}`);
console.log("\n");

console.log("===printDay===");
let whatDayOfTheWeek = printDay(1);
console.log(`The day is: ${whatDayOfTheWeek}`);
whatDayOfTheWeek = printDay(41);
console.log(`The day is: ${whatDayOfTheWeek}`);
console.log("\n");

console.log("===lastElement===");
let arrElements = [1, 2, 3, 4];
console.log(lastElement(arrElements));
arrElements = null;
console.log(lastElement(arrElements));
console.log("\n");

console.log("===numberCompare===");
numberCompare(1, 1);
numberCompare(2, 1);
numberCompare(1, 2);
console.log("\n");

console.log("===singleLetterCounter===");
console.log(singleLetterCount("amazing", "A"));
console.log(singleLetterCount("Rithm School", "o"));
console.log(singleLetterCount("Be", "A"));
console.log("\n");

console.log("===multipleLetterCount===");
console.log(multipleLetterCount("Hello"));
console.log(multipleLetterCount("Person"));
console.log("\n");

console.log("===arrayManipulation===");
console.log(arrayManipulation([1, 2, 3], "remove", "end"));
console.log(arrayManipulation([1, 2, 3], "remove", "beginning"));
console.log(arrayManipulation([1, 2, 3], "add", "beginning", 20));
console.log(arrayManipulation([1, 2, 3], "add", "end", 30));
console.log(arrayManipulation([], "s", "s")); //Prints out undefined invalid args.
console.log("\n");

console.log("===isPalindrome===");
console.log(isPalindrome("testing")); // false
console.log(isPalindrome("tacocat")); // true
console.log(isPalindrome("hannah")); // true
console.log(isPalindrome("robert")); // false
console.log(isPalindrome("a man a plan a canal Panama")); // true
