const accoundId = 133456;
let accountEmail = "harshanand121@gmail.com";
var accountPass = "12345";
accountcity = "delhi";  // prefer not to use variable can also declare in this way too
let accountstate;

accountEmail ="h@2c.com";
accountPass = "2134564";
accountcity = "jaipur";

console.table([accoundId,accountEmail,accountPass,accountcity]); // in form of table of key-value pair kind of 
console.log(accoundId);


// In ES6 (ECMAScript 2015), the let and const keywords were introduced for variable declaration, offering significant improvements over the older var keyword. Here's why you should avoid using var in modern JavaScript:

// 1. Scope Issues:

// Function Scope:
// var has function scope, meaning it's only accessible within the function it's declared in. This can lead to unexpected behavior, especially in nested functions.
// Block Scope:
// let and const have block scope, which means they're only accessible within the block they're declared in (e.g., inside an if statement or loop). This provides better encapsulation and reduces the risk of variable collisions.

// JavaScript

// if (true) {
//   var x = 10; // x is accessible outside the if block
//   let y = 20; // y is only accessible inside the if block
// }

// console.log(x); // 10
// console.log(y); // ReferenceError: y is not defined

// 2. Hoisting:
// Variable Hoisting:
// var declarations are hoisted to the top of their scope, which means you can use a variable before it's declared. This can lead to confusion and make code harder to understand.
// No Hoisting:
// let and const are not hoisted, so you must declare them before using them. This enforces a more logical and predictable code structure.


// console.log(x); // undefined (due to hoisting)
// var x = 10;

// console.log(y); // ReferenceError: y is not defined
// let y = 20;

// 3. Redeclaration:--
// Redeclaration Allowed:
// var allows you to redeclare a variable within the same scope, which can lead to accidental overwrites.
// Redeclaration Not Allowed:
// let and const prevent redeclaration within the same scope, helping you catch potential errors early on.

// var x = 10;
// var x = 20; // Allowed with var

// let y = 10;
// let y = 20; // Error: Identifier 'y' has already been declared

// 4. Const for Immutability:
// const allows you to declare variables that cannot be reassigned, ensuring that their values remain constant throughout the program. This is helpful for creating read-only values and preventing accidental modifications.
// In summary, let and const offer better scoping, prevent hoisting issues, and provide more control over variable reassignment, making them the preferred choice for variable declarations in modern JavaScript.