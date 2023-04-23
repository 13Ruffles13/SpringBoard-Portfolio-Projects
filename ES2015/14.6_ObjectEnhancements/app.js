/* 
    TODO: refactor some ES5 code into ES2015. Write your code in the sections 
    with a comment to “Write an ES2015 Version”.
*/
function createInstructor(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
  };
}

function createInstructorES2015(firstName, lastName) {
  return {
    firstName, // key is set to firstName : val = Param passed to function
    lastName,
  };
}

console.log(createInstructorES2015("John", "Doe"));

// Computed Property names
var favoriteNumber = 42;

var instructor = {
  // object literal
  firstName: "Colt",
};

instructor[favoriteNumber] = "That is my favorite!";

console.log(instructor);

let favNumber = 42;
let instructorV2 = {
  firstName: "Colt",
  [favNumber]: "That is my favorite!",
};

console.log(instructorV2);

//Object methods
var instructor = {
  firstName: "Colt",
  sayHi: function () {
    return "Hi!";
  },
  sayBye: function () {
    return this.firstName + " says bye!";
  },
};

console.log(instructor.sayHi());
console.log(instructor.sayBye());

let instructorV2Methods = {
  firstName: "Colt",
  sayHi() {
    return "Hi!";
  },
  sayBye() {
    return this.firstName + " says bye!";
  },
};
console.log(instructorV2Methods.sayHi());
console.log(instructorV2Methods.sayBye());

/*
    TODO: **createAnimal function**

        Write a function which generates an animal object. 
        The function should accepts 3 arguments:

        - species: the species of animal (‘cat’, ‘dog’)
        - verb: a string used to name a function (‘bark’, ‘bleet’)
        - noise: a string to be printed when above function is called (‘woof’, ‘baaa’)

        Use one or more of the object enhancements we’ve covered.
*/
function createAnimal(species, verb, noise) {
  return {
    species,
    [verb]() {
      // string name for a function
      return noise;
    },
  };
}
const d = createAnimal("dog", "bark", "woof");
console.log(d.bark());
const s = createAnimal("sheep", "bleet", "BAAAAaaaaaaaa");
console.log(s.bleet());
