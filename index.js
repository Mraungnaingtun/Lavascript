
let numbers = [1, 2, 3, 4, 5];
let moreNumbers = [7, 8, 9];

let copiedArray = [...numbers];
console.log("Copied array using spread operator:", copiedArray);

let mergedArray = [...numbers, ...moreNumbers];
console.log("Merged array using spread operator:", mergedArray);