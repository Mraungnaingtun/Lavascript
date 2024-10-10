// controlStructures.js
// A guide to JavaScript Control Structures

// 1. If-Else Statement
let num = 10;
if (num > 5) {
  console.log(`The number ${num} is greater than 5`);
} else if (num === 5) {
  console.log(`The number ${num} is equal to 5`);
} else {
  console.log(`The number ${num} is less than 5`);
}
//============================================================================================
// 2. Switch Case Statement
let color = "red";
switch (color) {
  case "red":
    console.log("The color is red");
    break;
  case "blue":
    console.log("The color is blue");
    break;
  default:
    console.log("The color is neither red nor blue");
}
//============================================================================================
// 3. For Loop
console.log("\nFor Loop Example:");
for (let i = 1; i <= 5; i++) {
  console.log(`Iteration ${i}`);
}
//============================================================================================
// 4. While Loop
console.log("\nWhile Loop Example:");
let counter = 1;
while (counter <= 3) {
  console.log(`Counter: ${counter}`);
  counter++;
}
//============================================================================================
// 5. Do-While Loop
console.log("\nDo-While Loop Example:");
let x = 5;
do {
  console.log(`x is: ${x}`);
  x--;
} while (x > 0);
//============================================================================================
// 6. For...of Loop (to iterate over arrays)
const fruits = ["Apple", "Banana", "Cherry"];
console.log("\nFor...of Loop Example:");
for (let fruit of fruits) {
  console.log(fruit);
}
//============================================================================================
// 7. For...in Loop (to iterate over object properties)
const car = { brand: "Toyota", model: "Corolla", year: 2021 };
console.log("\nFor...in Loop Example:");
for (let key in car) {
  console.log(`${key}: ${car[key]}`);
}
//============================================================================================
// 8. Break and Continue Statements
console.log("\nUsing Break Statement:");
for (let i = 1; i <= 5; i++) {
  if (i === 3) break; // Stop loop when i is 3
  console.log(`i = ${i}`);
}
//============================================================================================
console.log("\nUsing Continue Statement:");
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue; // Skip the current iteration when i is 3
  console.log(`i = ${i}`);
}
//============================================================================================
// 9. Try-Catch Statement
console.log("\nTry-Catch Example:");
try {
  let result = 10 / 0;
  console.log(`Result is: ${result}`);
} catch (error) {
  console.log("An error occurred: " + error.message);
}
//============================================================================================