// OperatorsExample.js

// 1. Arithmetic Operators
let a = 10;
let b = 20;

console.log("Arithmetic Operators:");
console.log("a + b =", a + b); // Addition
console.log("a - b =", a - b); // Subtraction
console.log("a * b =", a * b); // Multiplication
console.log("b / a =", b / a); // Division
console.log("b % a =", b % a); // Modulus

// 2. Relational Operators
console.log("\nRelational Operators:");
console.log("a == b:", a == b); // Equal to
console.log("a != b:", a != b); // Not equal to
console.log("a > b:", a > b);   // Greater than
console.log("a < b:", a < b);   // Less than
console.log("a >= b:", a >= b); // Greater than or equal to
console.log("a <= b:", a <= b); // Less than or equal to

// 3. Logical Operators
let x = true;
let y = false;

console.log("\nLogical Operators:");
console.log("x && y:", x && y); // Logical AND
console.log("x || y:", x || y); // Logical OR
console.log("!x:", !x);          // Logical NOT

// 4. Bitwise Operators
let m = 5;  // 0101 in binary
let n = 3;  // 0011 in binary

console.log("\nBitwise Operators:");
console.log("m & n:", m & n); // Bitwise AND
console.log("m | n:", m | n); // Bitwise OR
console.log("m ^ n:", m ^ n); // Bitwise XOR
console.log("~m:", ~m);       // Bitwise NOT
console.log("m << 1:", m << 1); // Left shift
console.log("m >> 1:", m >> 1); // Right shift

// 5. Assignment Operators
let p = 10;
console.log("\nAssignment Operators:");
p += 5;  // Equivalent to p = p + 5
console.log("p += 5:", p);
p -= 2;  // Equivalent to p = p - 2
console.log("p -= 2:", p);
p *= 2;  // Equivalent to p = p * 2
console.log("p *= 2:", p);
p /= 3;  // Equivalent to p = p / 3
console.log("p /= 3:", p);
p %= 2;  // Equivalent to p = p % 2
console.log("p %= 2:", p);

// 6. Unary Operators
console.log("\nUnary Operators:");
let q = 5;
console.log("++q:", ++q); // Pre-increment
console.log("q++:", q++); // Post-increment
console.log("--q:", --q); // Pre-decrement
console.log("q--:", q--); // Post-decrement

// 7. Ternary Operator // condition ? expressionIfTrue : expressionIfFalse;
console.log("\nTernary Operator:");
let max = (a > b) ? a : b; // Ternary operation
console.log("Maximum of a and b is:", max);

// 8. Typeof Operator
console.log("\nTypeof Operator:");
console.log("Type of a:", typeof a); // Returns "number"
console.log("Type of x:", typeof x); // Returns "boolean"
console.log("Type of 'hello':", typeof "hello"); // Returns "string"

// 9. Instanceof Operator
console.log("\nInstanceof Operator:");
console.log("Is x an instance of Boolean?", x instanceof Boolean); // Returns false
console.log("Is new Boolean(true) an instance of Boolean?", new Boolean(true) instanceof Boolean); // Returns true



// nullish coalescing operator
// let result = value1 ?? value2;
// If value1 is null or undefined, value2 is returned.
let user;
let defaultUser = "Guest";
let userName = user ?? defaultUser;
console.log(userName); // Output: Guest
