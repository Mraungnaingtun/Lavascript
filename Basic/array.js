//-------------------------------------------------------------
// 1. Declaring and Initializing Arrays
let numbers = [1, 2, 3, 4, 5];
let fruits = ["Apple", "Banana", "Cherry"];
let emptyArray = new Array(3); // Creates an empty array of length 3

console.log("Numbers:", numbers);
console.log("Fruits:", fruits);
console.log("Empty array with default size:", emptyArray);
//-------------------------------------------------------------
// 2. Accessing Array Elements
console.log("First number:", numbers[0]);
console.log("Second fruit:", fruits[1]);
//-------------------------------------------------------------
// 3. Array Length
console.log("Length of numbers array:", numbers.length);
console.log("Length of fruits array:", fruits.length);
//-------------------------------------------------------------
// 4. Adding and Removing Elements
// Add elements at the end using push
numbers.push(6);
console.log("After push:", numbers);

// Remove the last element using pop
let poppedElement = numbers.pop();
console.log("Popped element:", poppedElement);
console.log("After pop:", numbers);

// Add elements at the beginning using unshift
numbers.unshift(0);
console.log("After unshift:", numbers);

// Remove the first element using shift
let shiftedElement = numbers.shift();
console.log("Shifted element:", shiftedElement);
console.log("After shift:", numbers);
//-------------------------------------------------------------
// 5. Iterating Over Arrays
console.log("\nIterating with a traditional for-loop:");
for (let i = 0; i < numbers.length; i++) {
    console.log("numbers[" + i + "]: " + numbers[i]);
}

console.log("\nIterating with forEach:");
numbers.forEach((number, index) => {
    console.log(`numbers[${index}] = ${number}`);
});
//-------------------------------------------------------------
// 6. Array Methods for Manipulation
// Map: Transform each element
let squaredNumbers = numbers.map(num => num * num);
console.log("Squared numbers:", squaredNumbers);

// Filter: Filter elements based on a condition
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

// Reduce: Accumulate values
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum of numbers:", sum);
//-------------------------------------------------------------
// 7. Finding Elements
let index = numbers.indexOf(3);
console.log("Index of 3:", index);

// Check if an array contains a specific element
let hasFive = numbers.includes(5);
console.log("Array contains 5:", hasFive);
//-------------------------------------------------------------
// 8. Sorting Arrays
let unsortedNumbers = [5, 3, 4, 1, 2];
unsortedNumbers.sort(); // Sorts as strings by default
console.log("Sorted (string comparison):", unsortedNumbers);

// Sorting numerically
unsortedNumbers.sort((a, b) => a - b);
console.log("Sorted numerically:", unsortedNumbers);
//-------------------------------------------------------------
// 9. Reversing Arrays
unsortedNumbers.reverse();
console.log("Reversed array:", unsortedNumbers);
//-------------------------------------------------------------
// 10. Slicing and Splicing Arrays
// Slicing: Get a part of the array without modifying it
let slicedNumbers = numbers.slice(1, 3);
console.log("Sliced numbers:", slicedNumbers);

// Splicing: Add/Remove elements from the array
let splicedNumbers = numbers.splice(2, 1); // Removes 1 element at index 2
console.log("After splice (removed 1 element):", numbers);
//-------------------------------------------------------------
// 11. Concatenating Arrays
let moreNumbers = [7, 8, 9];
let combined = numbers.concat(moreNumbers);
console.log("Concatenated array:", combined);
//-------------------------------------------------------------
// 12. Multidimensional Arrays (2D Arrays)
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("2D Array (Matrix):", matrix);

// Accessing 2D array elements
console.log("Element at [1][2]:", matrix[1][2]);
//-------------------------------------------------------------
// 13. Converting Arrays to Strings
console.log("Array as a string:", numbers.toString());
console.log("Array joined with a delimiter:", numbers.join('-'));
//-------------------------------------------------------------
// 14. Destructuring Arrays
let [first, second, ...rest] = numbers;
console.log("First:", first);
console.log("Second:", second);
console.log("Rest of the elements:", rest);
//-------------------------------------------------------------
// 15. Spread Operator (Copying and Merging Arrays)
let copiedArray = [...numbers];
console.log("Copied array using spread operator:", copiedArray);

let mergedArray = [...numbers, ...moreNumbers];
console.log("Merged array using spread operator:", mergedArray);
//-------------------------------------------------------------