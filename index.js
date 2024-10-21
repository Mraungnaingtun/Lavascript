const car = { brand: "Toyota", model: "Corolla", year: 2021 };
console.log("\nFor...in Loop Example:");
for (let key in car) {
  console.log(`${key}: ${car[key]}`);
}