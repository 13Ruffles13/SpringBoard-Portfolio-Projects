/*
TODO: 1. Create the following variables
    - ***name**, which is a string set to your current name*
    - ***dayOfBirth**, which is a number set to the day of your birth month*
*/

let name = 'Rafael Alvarado';
let dayOfBirth = '29';

/*
TODO: 2. See what happens when you have multiple variables of the same name. 
Which one takes precedence?
*/

let firstVar = 12;
// let firstVar = 13; //ERROR: Cannot redeclare block-scoped variable 'firstVar'.ts(2451)

let secondVar = 'valueGiven';
secondVar = 'updatedValue'; //secondVar value is updated!

/*
TODO: 3. Write some JavaScript that prompt’s the user for their favorite color. Once the 
user has submitted  a favorite color, log that color to the console along with a friendly 
message.
*/
const prompt = require('prompt-sync')();
let getColor = prompt('What is your favorite color?');
console.log('The color that you love and is your favorite is' + getColor);

/*
TODO: 4. Create a string that contains both single quotes and double quotes.
*/

let bothQuotes = "I am string that contains 'Both type's' this is interesting!";
console.log(bothQuotes);

/*
TODO: 5. What is the difference between null and undefined?

A: Null in JS is defined as a empty value has been assigned to a variable that has been declared. While as
undefined is referred to a variable that has been declared but nothing has been assigned to it

let someVar = null; // <- This has been defined as a empty value
let someVar2; // <- This has not been assigned to nothing (undefined)
*/

/*
TODO: 6. What is NaN in JavaScript? What is the typeof NaN?

A: In JS NaN is defined as a 'Not-a-Number' for example we can call this function since it's
a property of the global object.

console.log(Number.isNaN('Hello')); // <- Output for this would be false since its Not a Number.

As for typeOf NaN since NaN is checking for a certain value to be a number or not returning
true or false. This is considered a numeric data type still with a constraint of whose value
cannot be represented using actual numbers meaning undefined as a real number.

console.log(typeof NaN); // <- Output would be 'number'
*/

/*
TODO: 7. You can declare a variable by typing let thing;. What is the value of thing?

A: By declaring a variable and not assigning now value to it the variable is undefined.
*/
let thing;

