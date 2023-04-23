const people = ["Greg", "Mary", "Devon", "James"];

//1. TODO: Write the command to remove “Greg” from the array.
people.shift();

//2. TODO: Write the command to remove “James” from the array.
people.pop();

//3. TODO: Write the command to add “Matt” to the front of the array.
people.unshift("Matt");

//4. TODO: Write the command to add your name to the end of the array.
people.push("Rafael");

/*
  5. TODO: Write the command to make a copy of the array using slice. 
     The copy should NOT include “Mary” or “Matt”.
"Matt" -- Remove [0] would translate to position 1 using slice()
"Mary" -- Remove [1] Position 2
"Devon" 
"Rafael"
*/
const newCopy = people.slice(2, 4); //(Start index of new Array, End of Slice of newArray)

//6. TODO: Write the command that gives the indexOf where “Mary” is located.
console.log("Position of Mary is: " + people.indexOf("Mary"));

//7. TODO: Write the command that gives the indexOf where “Foo” is located (this should return -1).
console.log("Position of Foo is: " + people.indexOf("Foo"));

/*
8. TODO: Redefine the people variable with the value you started with. Using the splice command, 
    remove “Devon” from the array and add “Elizabeth” and “Artie”. Your array should look like 
    this when you are done [“Greg”, “Mary”, “Elizabeth”, “Artie”, “James”].
"Matt" -- Remove [0]
"Mary"
"Devon" -- Remove [2]
"Rafael" -- Remove [3]
*/
people.splice(0, 1, "Greg");
people.splice(2, 2, "Elizabeth", "Artie", "James");

/*
9. TODO: Create a new variable called withBob and set it equal to the people array 
    concatenated with the string of “Bob”.
*/
let withBob = people.concat("Bob");
console.log(withBob);
