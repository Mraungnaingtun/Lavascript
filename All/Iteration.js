// JavaScript Iteration Methods


//--------------------------Arrays----------------------------------------
// 1. Iterating Over Arrays

// Sample array
const fruits = ['apple', 'banana', 'cherry', 'date'];

// a. for loop
console.log("Using for loop:");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. forEach()
console.log("\nUsing forEach():");
fruits.forEach(function(fruit) {
  console.log(fruit);
});

// c. for...of loop
console.log("\nUsing for...of loop:");
for (const fruit of fruits) {
  console.log(fruit);
}

// d. map() (creates a new array)
console.log("\nUsing map():");
const fruitLengths = fruits.map(fruit => fruit.length);
console.log("Fruit Lengths:", fruitLengths); // Output: [5, 6, 6, 4]

// e. filter() (creates a new array with filtered results)
console.log("\nUsing filter():");
const longFruits = fruits.filter(fruit => fruit.length > 5);
console.log("Fruits with more than 5 letters:", longFruits); // Output: [ 'banana', 'cherry' ]


//--------------------------Objects----------------------------------------
// 2. Iterating Over Objects

// Sample object
const person = {
  name: 'Alice',
  age: 30,
  city: 'New York'
};

// a. for...in loop
console.log("\nUsing for...in loop:");
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

// b. Object.keys() with forEach()
console.log("\nUsing Object.keys() with forEach():");
Object.keys(person).forEach(key => {
  console.log(`${key}: ${person[key]}`);
});

// c. Object.entries() with forEach()
console.log("\nUsing Object.entries() with forEach():");
Object.entries(person).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

// d. Object.values() with forEach()
console.log("\nUsing Object.values() with forEach():");
Object.values(person).forEach(value => {
  console.log(value);
});



//-----------------------------Maps-------------------------------------
// 3. Iterating Over Maps

// Sample Map
const fruitMap = new Map([
  ['apple', 1],
  ['banana', 2],
  ['cherry', 3]
]);

// a. Using forEach() on a Map
console.log("\nUsing forEach() on a Map:");
fruitMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

// b. Using for...of loop with Map.entries()
console.log("\nUsing for...of loop with Map.entries():");
for (const [key, value] of fruitMap.entries()) {
  console.log(`${key}: ${value}`);
}


//-----------------------------Maps-------------------------------------
// 4. Iterating Over Sets

// Sample Set
const fruitSet = new Set(['apple', 'banana', 'cherry', 'banana']); // 'banana' will be stored only once

// a. Using forEach() on a Set
console.log("\nUsing forEach() on a Set:");
fruitSet.forEach(fruit => {
  console.log(fruit);
});

// b. Using for...of loop with Set
console.log("\nUsing for...of loop with Set:");
for (const fruit of fruitSet) {
  console.log(fruit);
}

// End of JavaScript Iteration Example
