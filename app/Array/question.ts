// - - - - - - - - - - - - - - - (1)- - - - - - - - - - - - - - - - - - - - -
//Transform and filter data:
// Create a new array containing only the names of active users, sorted in alphabetical order.
const users = [
  { name: "Alice", age: 25, active: true },
  { name: "Bob", age: 30, active: false },
  { name: "Charlie", age: 22, active: true },
  { name: "David", age: 35, active: false },
];
const newArry = users.filter((u) => u.active === true);
// console.log(newArry);

// - - - - - - - - - - - - - - - (2)- - - - - - - - - - - - - - - - - - - - -
//Aggregate numerical data:
//Calculate the total balance after all transactions, assuming the balance starts at 0.
const transactions = [
  { id: 1, amount: 200, type: "deposit" },
  { id: 2, amount: 100, type: "withdrawal" },
  { id: 3, amount: 50, type: "withdrawal" },
  { id: 4, amount: 300, type: "deposit" },
];
const result = transactions.reduce((res, t) => {
  return t.type === "deposit" ? res + t.amount : res - t.amount;
}, 0);
// console.log(result);

// - - - - - - - - - - - - - - - (3)- - - - - - - - - - - - - - - - - - - - -
// Find unique values:
const numbers = [1, 2, 2, 3, 4, 4, 5, 6, 6, 6, 7];
