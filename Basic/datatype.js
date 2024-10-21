
/* All numeric values in JavaScript, including integers, are represented as 
    64-bit double-precision floating-point numbers, regardless of
    whether they are whole numbers or fractions.
*/

// JavaScript has 8 Datatypes
// String
// Number
// Bigint
// Boolean
// Undefined // a variable without a value, has the value undefined. The type is also undefined.
// Null
// Symbol
// Object

/*
    The Object Datatype
    The object data type can contain both built-in objects, and user defined objects:

    Built-in object types can be:

    objects, arrays, dates, maps, sets, intarrays, floatarrays, promises, and more.
*/
// JavaScript Data Types

// *****************************************************
// *****************************************************
// *****************************************************

// 1. Primitive Data Types
// Primitive values are immutable (they are hardcoded and cannot be changed).

// String
let name = "Alice";
console.log("String:", name); // Output: String: Alice

// Number
let age = 30;
let price = 19.99;
console.log("Number:", age, price); // Output: Number: 30 19.99

// BigInt
let bigNumber = 1234567890123456789012345678901234567890n; // Notice the 'n'
console.log("BigInt:", bigNumber); // Output: BigInt: 1234567890123456789012345678901234567890n

// Boolean
let isStudent = true;
console.log("Boolean:", isStudent); // Output: Boolean: true

// Undefined
let undefinedVar;
console.log("Undefined:", undefinedVar); // Output: Undefined: undefined

// Null
let nullVar = null;
console.log("Null:", nullVar); // Output: Null: null

// Symbol
let uniqueSymbol = Symbol('description');
console.log("Symbol:", uniqueSymbol); // Output: Symbol: Symbol(description)

// *****************************************************
// *****************************************************
// *****************************************************
// 2. Non-Primitive Data Types (Reference Types)
// JavaScript Objects are Mutable
// Objects are mutable: They are addressed by reference, not by value.

// Object
let person = {
  name: "Bob",
  age: 25
};
console.log("Object:", person); // Output: Object: { name: 'Bob', age: 25 }

// Array
let fruits = ["apple", "banana", "cherry"];
console.log("Array:", fruits); // Output: Array: [ 'apple', 'banana', 'cherry' ]

// Function
function greet() {
  return "Hello, World!";
}
console.log("Function:", greet()); // Output: Function: Hello, World!

// Date
let today = new Date();
console.log("Date:", today); // Output: Date: Current date and time

// 3. Special Values

// Infinity
let infiniteValue = 1 / 0;
console.log("Infinity:", infiniteValue); // Output: Infinity: Infinity

// -Infinity
let negativeInfiniteValue = -1 / 0;
console.log("-Infinity:", negativeInfiniteValue); // Output: -Infinity: -Infinity

// NaN (Not-a-Number)
let notANumber = 0 / 0;
console.log("NaN:", notANumber); // Output: NaN: NaN

// 4. Type Checking

console.log("Type of name:", typeof name); // Output: Type of name: string
console.log("Type of age:", typeof age); // Output: Type of age: number
console.log("Type of isStudent:", typeof isStudent); // Output: Type of isStudent: boolean
console.log("Type of undefinedVar:", typeof undefinedVar); // Output: Type of undefinedVar: undefined
console.log("Type of nullVar:", typeof nullVar); // Output: Type of nullVar: object (this is a known quirk in JavaScript)
console.log("Type of person:", typeof person); // Output: Type of person: object
console.log("Type of fruits:", typeof fruits); // Output: Type of fruits: object
console.log("Type of greet:", typeof greet); // Output: Type of greet: function
console.log("Type of today:", typeof today); // Output: Type of today: object

// 5. Implicit Type Coercion
let implicitCoercion = "5" + 3; // String + Number = String
console.log("Implicit Coercion (String + Number):", implicitCoercion); // Output: Implicit Coercion (String + Number): 53

// 6. Explicit Type Conversion
let explicitNumber = Number("123");
console.log("Explicit Conversion (String to Number):", explicitNumber); // Output: Explicit Conversion (String to Number): 123

let explicitInteger = parseInt("456");
console.log("Explicit Conversion (String to Integer):", explicitInteger); // Output: Explicit Conversion (String to Integer): 456

let explicitFloat = parseFloat("78.90");
console.log("Explicit Conversion (String to Float):", explicitFloat); // Output: Explicit Conversion (String to Float): 78.9

// 7. Exploring Limits of Number Precision
let preciseValue = 0.1 + 0.2;
console.log("Precision Issue:", preciseValue);
 // Output: Precision Issue: 0.30000000000000004
// use this method for correction toFixed() // Math.round()

// 8. Using BigInt for Large Integers
let largeInt = BigInt("9007199254740992"); // Larger than 2^53
console.log("BigInt:", largeInt); // Output: BigInt: 9007199254740992n

// End of JavaScript Data Types Example
