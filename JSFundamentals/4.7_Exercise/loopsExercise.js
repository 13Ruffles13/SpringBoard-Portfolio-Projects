/*
SubUnit 4.7 Loops
====================
    1. TODO: Using a ***for loop*** console.log all the numbers from 0 to 10
    Using a ***while loop*** console.log all the numbers from 0 to 10

    2. TODO: Using a for loop console.log all the even numbers from 0 to 20

    3. TODO: Using a while loop console.log all the odd numbers from 0 to 20

    4. TODO: Using a for loop console.log all the numbers from 10 to 0.
*/
// Task 1
console.log("===For Loops===");
for (let index = 0; index <= 10; index++) {
  console.log(index);
}
console.log("===While Loops===");
let totalReach = 10;
let numReach = 0;
while (true) {
  console.log(numReach);
  if (totalReach === numReach) break;
  numReach++;
}
// Task 2
console.log("===Even Numbers [For Loop]===");
for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}
// Task 3
console.log("===Odd Numbers [While loop]===");
let counter = 0;
while (counter !== 20) {
  console.log((counter += 1));
  counter++;
}
// Task 4
console.log("===Countdown [For loop]===");
for (let countDown = 10; countDown >= 0; countDown--) {
  console.log(countDown + "...");
}
console.log("BLAST OFF!");
