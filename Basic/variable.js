// JavaScript Variable Examples
// 1. Declaring Variables
// Example of var
var name = "Alice"; // 'var' declares a variable globally or throughout the function
console.log(name); // Output: Alice

// Example of let
let age = 30; // 'let' declares a block-scoped variable
console.log(age); // Output: 30

// Example of const
const pi = 3.14; // 'const' declares a block-scoped variable that cannot be reassigned
console.log(pi); // Output: 3.14
//----------------------------------------------------------------------------------------------
// 2. Different Data Types
// String Variable
let greeting = "Hello, World!";
console.log(greeting); // Output: Hello, World!

// Number Variable
let score = 95;
console.log(score); // Output: 95

// Boolean Variable
let isStudent = true;
console.log(isStudent); // Output: true

// Array Variable
let colors = ["red", "green", "blue"];
console.log(colors); // Output: ["red", "green", "blue"]

// Object Variable
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 25
};
console.log(person); // Output: { firstName: "John", lastName: "Doe", age: 25 }
//----------------------------------------------------------------------------------------------
// 3. Variable Scope
// Global Scope
var globalVar = "I'm a global variable";

function showGlobal() {
    console.log(globalVar);
}
showGlobal(); // Output: I'm a global variable

// Local Scope
function myFunction() {
    let localVar = "I'm a local variable";
    console.log(localVar); // Accessible only within this function
}
myFunction(); // Output: I'm a local variable
// console.log(localVar); // Error: localVar is not defined
//----------------------------------------------------------------------------------------------
// 4. Updating Variables

let count = 0;
count += 1; // Updating a 'let' variable is allowed
console.log(count); // Output: 1

const MAX_LIMIT = 100;
// MAX_LIMIT += 1; // Error: Assignment to constant variable
//----------------------------------------------------------------------------------------------
// 5. Using Variables in Expressions

let num1 = 5;
let num2 = 10;
let sum = num1 + num2; // Using variables in an expression
console.log(sum); // Output: 15
