// Custom error class
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError"; // Set the name of the error
    }
}
//----------------------------------------------------------------------------------
function divide(a, b) {
    // Function to perform division
    if (b === 0) {
        throw new Error("Cannot divide by zero."); // Throwing a built-in error
    }
    return a / b;
}
//----------------------------------------------------------------------------------
function checkAge(age) {
    // Function to check age and throw a custom error
    if (age < 18) {
        throw new CustomError("Age must be 18 or older."); // Throwing a custom error
    }
    console.log("Age is valid.");
}
//----------------------------------------------------------------------------------
// Main execution
console.log("Error Handling in JavaScript:");

try {
    console.log("Attempting to divide by zero:");
    let result = divide(10, 0); // This will throw an error
    console.log("Result:", result);
} catch (error) {
    console.log("Error:", error.message);
}

try {
    console.log("\nChecking age:");
    checkAge(15); // This will throw a CustomError
} catch (error) {
    console.log("Caught custom error:", error.message);
} finally {
    console.log("This block always executes.");
}

// Another example with try-catch-finally
try {
    console.log("\nTrying to parse JSON:");
    let data = JSON.parse('{"name":"John", "age":30}'); // Valid JSON
    console.log("Parsed data:", data);
    
    // Invalid JSON to demonstrate error
    let invalidData = JSON.parse('{"name":"John", "age":30,}'); // Invalid JSON
} catch (error) {
    console.log("JSON Parsing Error:", error.message);
} finally {
    console.log("JSON parsing attempt finished.");
}
