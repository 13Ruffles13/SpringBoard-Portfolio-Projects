/* ----- ES5 Global Constants ----- */
var PI = 3.14;
PI = 42; // stop me from doing this!

/* ----- ES2015 Global Variables ----- */
const globalPi = 3.141592653589793;
globalPi = 42; // stop me from doing this!

/* 
    - Quiz -
    1. What is the difference between ***var*** and ***let***?
        A: Var keyword can reassigned, redeclare, and mutated. Scope
        rules are function scope. While let can be reassigned and mutated to a variable
        it can not be redeclare. Plus its scope rules are block scope.

    2. What is the difference between ***var*** and ***const***?
        A: Var can create variables that can be reassigned, redeclare, and mutated.
        While const creates "constant" variables that cannot be reassigned to another
        value.

    3. What is the difference between let and const?
        A: Reassigning a variable to another value is allowed with let. Redeclare and
        reassign is not allowed with const.

    4. What is hoisting?
        A: It is JS default behavior of moving declarations to the top.
        The interpreter moves all variable and function declarations to the top
        of the current scope.

*/
