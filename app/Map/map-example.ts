let myMap = new Map();
myMap.set("name", "John");
myMap.set(1, "one");
myMap.set(true, "yes");

console.log(myMap.get("name")); // 'John'
console.log(myMap.has(1)); // true
myMap.delete('key1');

console.log(myMap.size); // 3

myMap.delete(true);
console.log(myMap.size); // 2

myMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

for (let [key, value] of myMap) {
  console.log(`${key}: ${value}`);
}

myMap.clear();
