// functionsDemo.js
// A guide to JavaScript Functions

// 1. Function Declaration
function greet(name) {
  console.log(`Hello, ${name}!`);
}
greet("Aung");
//============================================================================================

// 2. Function Expression
const add = function (a, b) {
  return a + b;
};
console.log(`Addition: ${add(5, 3)}`);
//============================================================================================

// 3. Arrow Function
const multiply = (a, b) => a * b;
console.log(`Multiplication: ${multiply(4, 2)}`);
//============================================================================================

// 4. Higher-Order Function (a function that accepts another function as an argument)
function higherOrder(func, value) {
  console.log("Running the higher-order function...");
  func(value);
}
higherOrder(greet, "Thazin");
//============================================================================================

// 5. Callback Function (a function passed as an argument to another function)
function fetchData(callback) {
  console.log("Fetching data...");
  // Simulating data fetch
  const data = { id: 1, name: "John Doe" };
  callback(data);
}

function displayData(data) {
  console.log("Data fetched:", data);
}
fetchData(displayData); // Pass displayData as a callback
//============================================================================================

// 6. Immediately Invoked Function Expression (IIFE)
(function () {
  console.log("\nThis is an IIFE, executed immediately upon definition!");
})();
//============================================================================================

// 7. Function with Default Parameters
function greetWithDefault(name = "Guest") {
  console.log(`Hello, ${name}! Welcome!`);
}
greetWithDefault(); // Uses the default value "Guest"
greetWithDefault("Khaing"); // Overrides the default value
//============================================================================================

// 8. Function with Rest Parameters
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(`Sum with Rest Parameters: ${sum(1, 2, 3, 4, 5)}`);
//============================================================================================

// 9. Recursive Function (A function that calls itself)
function factorial(n) {
  if (n === 1) return 1; // Base case
  return n * factorial(n - 1); // Recursive call
}
console.log(`Factorial of 5: ${factorial(5)}`);
//============================================================================================

// 10. Function as a Return Value
function createMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}
const double = createMultiplier(2); // Returns a function that doubles a number
console.log(`Double of 10: ${double(10)}`);
//============================================================================================

