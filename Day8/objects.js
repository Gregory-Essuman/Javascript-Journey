// EXERCISE: LEVEL 1

// Creating an empty object
const dog = {};
console.log(dog);

// Adding properties to Dog Object
dog.name = "Boggie";
dog.legs = 4;
dog.color = "Blackisk-Brown";
dog.age = 16;
dog.bark = function() {
  console.log('Woof Woof')
};

// Accessing the dog properties
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
dog.bark();

//  New dog properties
dog.breed = "Sheperd";
dog.getDogInfo = function() {
  return `Name of the dog is ${this.name}, it's color is ${this .color}. It is ${this.age} years old and obviously has ${this.legs} legs`
};

console.log(dog.breed)
console.log(dog.getDogInfo())


// EXERCISE: LEVEL 2

// User object (nested objects)

const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
};

// Finding user with most skills
let mostSkilled;
let max = 0

for (const property in users) {
    if (users[property].skills.length > max) {
        max = users[property].skills.length;
        mostSkilled = property
    }
}
console.log(mostSkilled);
