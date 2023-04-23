/*
Part 1 TODO: Write down what the following statements will return. 
Try to figure this out before putting the commands in the chrome console.

1. 2 == “2”; -> True
2. 2 === 2; -> True
3. 10 % 3; -> 1
4. 10 % 3 === 1; -> True
5. true && false; -> False
6. false || true; -> True
7. true || false; -> True

*/

/*
Part 2 TODO: Answer the following questions about this code block:

1. What should the above code console.log?

A: Since isLearning is true from the conditional statement it will execute the true block.
Outputting 'Keep it up!;

2. Why do we not need to specify 
if(isLearning === true)? Why does if(isLearning) work on its own?

A: Due to declaring a variable and upon giving a value or not JS. Using logic called truthy
or falsy. In this case isLearning is a boolean which is a truthy resulting in the first block
of code executing.
*/
let isLearning = true;
if (isLearning) {
  console.log("Keep it up!");
} else {
  console.log("Pretty sure you are learning....");
}

/*
Part 2 TODO: Continuation...

1. What should the code below console.log? Why?

A: firstVariable is undefined meaning falsy first block of code will not execute. Second
condition checks first if firstVar or secondVar is truthy. Due to secondVar being a empty string
it is as well falsy meaning that condition is not met as well. Third condition checks for if
firstVar or ThirdVar are truthy. We know firstVar isn't. ThirdVar is declared as a number with
value 1. Meaning it is truthy and since the condition is comparing if either or is true. The
third condition is met and the code will execute 'Third'. Finally secretMessage was not used 
in this case and else statement want not needed at this time.

2.  What is the value of firstVariable when it is initialized?

A: When initialized it is undefined since no value has been assigned.

3. Is the value of firstVariable a “truthy” value? Why?

A: No, firstVar is not a truthy for the fact that it is undefined which is a falsy value.

4. Is the value of secondVariable a “truthy” value? Why?

A: No, secondVar is not a truthy because it is a empty string considered a falsy value.

5. Is the value of thirdVariable a “truthy” value? Why?

A: Yes, thirdVar is a truthy value because all numbers expect 0 are truthy.
*/

let firstVariable;
let secondVariable = "";
let thirdVariable = 1;
let secretMessage = "Shh!";

if (firstVariable) {
  console.log("first");
} else if (firstVariable || secondVariable) {
  console.log("second");
} else if (firstVariable || thirdVariable) {
  console.log("third");
} else {
  console.log("fourth");
}

/*
Part 3 TODO: 

1. Research [here] Math.Random
(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

Write an if statement that console.log’s “Over 0.5” if ***Math.random*** returns a 
number greater than 0.5.

Otherwise console.log “Under 0.5”.

2. What is a falsey value? List all the falsey values in JavaScript.

A: Falsy is a value that is considered false in boolean context. JS uses type conversion to
check the contexts (if, else if, cases) Returning an output of true or false.

Value       ||    Description
false             The keyword false.
0                 The number zero.
-0                The number negative zero
0n                The bigInt zero
"", '', ``        Empty string value
null              null - Absence of a value
undefined         undefined - primitive value
NaN               Not a number
*/

let aRandomNum = 1;
aRandomNum = Math.random(aRandomNum * 10 + 1).toFixed(1); //Set a random float number
if (aRandomNum > 0.5) {
  console.log(`The number ${aRandomNum} is over 0.5`);
} else {
  console.log(`The number ${aRandomNum} is under 0.5`);
}
