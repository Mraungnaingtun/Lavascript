
// JavaScript Objects
//-------------------------------------------------------------------------------
// 1. Creating Objects

// Object Literal Notation
let person = {
  name: "Alice",
  age: 30,
  isStudent: false,
};
console.log("Person Object:", person);

// Constructor Function
function Person(name, age, isStudent) {
  this.name = name;
  this.age = age;
  this.isStudent = isStudent;
}
let bob = new Person("Bob", 25, true);
console.log("Bob Object:", bob);

// Using Object.create() to create an object
let proto = {
  greet: function () {
    return `Hello, my name is ${this.name}`;
  },
};
let charlie = Object.create(proto);
charlie.name = "Charlie";
charlie.age = 22;
console.log("Charlie Object:", charlie);
console.log(charlie.greet()); // Output: Hello, my name is Charlie
//-------------------------------------------------------------------------------
// 2. Accessing Object Properties

// Dot Notation
console.log("Person's Name (Dot Notation):", person.name); // Output: Alice

// Bracket Notation
console.log("Person's Age (Bracket Notation):", person["age"]); // Output: 30
//-------------------------------------------------------------------------------
// 3. Modifying Object Properties

person.age = 31; // Update existing property
console.log("Updated Age:", person.age); // Output: 31

person.city = "New York"; // Add new property
console.log("Person with New Property:", person); // Output: { name: 'Alice', age: 31, isStudent: false, city: 'New York' }
//-------------------------------------------------------------------------------
// 4. Deleting Object Properties

delete person.isStudent; // Remove a property
console.log("Person After Deletion:", person); // Output: { name: 'Alice', age: 31, city: 'New York' }
//-------------------------------------------------------------------------------
// 5. Object Methods

let calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
};

console.log("Addition:", calculator.add(5, 3)); // Output: Addition: 8
console.log("Subtraction:", calculator.subtract(5, 3)); // Output: Subtraction: 2
//-------------------------------------------------------------------------------
// 6. Object Properties Enumeration

for (let key in person) {
  console.log(`Key: ${key}, Value: ${person[key]}`);
}
//-------------------------------------------------------------------------------
// 7. Object Destructuring

const { name, age } = person; // Extract properties
console.log("Destructured Name:", name); // Output: Destructured Name: Alice
console.log("Destructured Age:", age); // Output: Destructured Age: 31
//-------------------------------------------------------------------------------
// 8. Object Spread Operator

let newPerson = { ...person, country: "USA" }; // Creaerty
console.log("New Person:", newPerson); // Output: { name: 'Alice', age: 31, city: 'New York', country: 'USA' }
//-------------------------------------------------------------------------------
// 9. Object Constructor and Prototypeste a new object with additional prop

function Animal(name, species) {
  this.name = name;
  this.species = species;
}
Animal.prototype.speak = function () {
  return `${this.name} makes a sound.`;
};

let dog = new Animal("Buddy", "Dog");
console.log("Dog Speak:", dog.speak()); // Output: Buddy makes a sound.
//-------------------------------------------------------------------------------
// 10. Object Inheritance

function Dog(name, breed) {
  Animal.call(this, name, "Dog"); // Call parent constructor
  this.breed = breed;
}

// Inherit from Animal
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

let myDog = new Dog("Rex", "German Shepherd");
console.log("My Dog Speak:", myDog.speak()); // Output: Rex makes a sound.
console.log("My Dog Breed:", myDog.breed); // Output: German Shepherd
//-------------------------------------------------------------------------------
// 11. Checking Object Types

console.log("Is person an object?", typeof person === "object"); // Output: true
console.log("Is name an object?", typeof name === "object"); // Output: false
//-------------------------------------------------------------------------------
// 12. Object.entries() and Object.keys()

console.log("Object Entries:", Object.entries(person)); // Output: [ [ 'name', 'Alice' ], [ 'age', 31 ], [ 'city', 'New York' ] ]
console.log("Object Keys:", Object.keys(person)); // Output: [ 'name', 'age', 'city' ]


//13. Nested Objects
myObj = {
  name: "John",
  age: 30,
  myCars: {
    car1: "Ford",
    car2: "BMW",
    car3: "Fiat"
  }
}

myObj.myCars.car2;
myObj.myCars["car2"];
myObj["myCars"]["car2"];
let p1 = "myCars";
let p2 = "car2";
myObj[p1][p2];
// End of JavaScript Objects Example

/*
  JavaScript objects can be converted to a string with JSON method JSON.stringify().
  // Create an Object
      const person = {
        name: "John",
        age: 30,
        city: "New York"
      };

  // Stringify Object
      let myString = JSON.stringify(person);


      Built-in JavaScript Constructors

      new Object()   // A new Object object
      new Map()      // A new Map object
      new Set()      // A new Set object
      new Date()     // A new Date object
      new RegExp()   // A new RegExp object
      new Function() // A new Function object
      new Array()    // A new Array object
*/



