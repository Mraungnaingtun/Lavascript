// testAsyncSync.js

// Synchronous function
function syncFunction() {
    console.log("1. Synchronous function started");
    const result = "Sync function result";
    console.log("2. Synchronous function completed");
    return result;
  }
  
  // Asynchronous function
  async function asyncFunction() {
    console.log("3. Asynchronous function started");
    const result = await new Promise((resolve) => {
        setTimeout(() => {
            resolve("------------ Async function result");
        }, 2000); // Simulates a 2-second delay
    });
    console.log("4. Asynchronous function completed");
    return result;
  }
  
  // Testing the functions
  console.log("Testing synchronous function:");
  console.log()
  const syncResult = syncFunction();
  console.log(`Synchronous function returned: ${syncResult}`);
  // ----------------------------------------------------------------------------
  console.log("\nTesting asynchronous function:");
  asyncFunction().then((asyncResult) => {
    console.log(`Asynchronous function returned: ${asyncResult}`);
  });
  
  console.log("\nCode execution continues after async call");
  