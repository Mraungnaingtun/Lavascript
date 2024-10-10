
function createMultiplier(factor) {
    return function (number) {
      return number * factor;
    };
  }
  const abc = createMultiplier(2); // Returns a function that doubles a number
  console.log(`Double of 10: ${abc(10)}`);