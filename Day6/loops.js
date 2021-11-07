// EXERCISE: LEVEL 1

// Iterating through numbers with for loop
for (let i = 0; i <= 10; i++) {    // Increment
    console.log(i)
};

for (let i = 10; i >= 0; i--) {   // Decrement
  console.log(i)
};

// Using while loop
let count = 0                     
while (count <= 10) {             // Increment
    console.log(count)    
    count++
};

let count1 = 10
while (count1 >= 0) {              // Decrement
    console.log(count1)
    count1--
};

// Using do while loop
let i = 0
do {
  console.log(i)                  // Increment
  i++
} while (i <= 10)

let newI = 10
do {
  console.log(newI)                  // Decrement
  newI--
} while (newI >= 0)

// From 0 to n
let n = Number(prompt("Enter a number:"));
for (let i = 0; i <= n; i++) {
    console.log(i);
};

// # Right Angled Triangle Pattern printing
let str = "";
for (let i = 0; i < 7; i++) {
    str += "#";
    console.log(str)
};

// Printing multiplication of 0 to 10 by itself
for (let i = 0; i <= 10; i++) {
  console.log(`${i} x ${i} = ${i * i}`)
};

// Printing powers of 2 and 3
console.log(`i i^2 i^3`)
for (let i = 0; i <= 10; i++) {
  console.log(`${i} ${i ** 2} ${i ** 3}`)
};

// Printing even numbers between 0 and 100
for (i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
      console.log(i)
  }
};

// Printing odd numbers between 0 and 100
for (i = 0; i <= 100; i++) {
  if (i % 2 > 0) {
      console.log(i)
  }
};

// Printing prime numbers between 0 and 100
for(let i=2; i <= 100 ; i++) {
  let isPrime = true;

  for(let j = 2; j < i; j++){
      if(i % j === 0 && i !== j){
          isPrime = false;
      }
  }
  if(isPrime === true){
      console.log(i);
  }
};

// Printing sum of numbers from 0 to 100
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
};
console.log(sum)

// Printing sum of all even and odd numbers from 0 to 100
let even = 0;
let odd = 0;
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        even += i;
    } else if (i % 2 > 0) {
        odd += i
    }
};
console.log(`The sum of all even numbers from 0 to 100 is ${even} and the sum of all odd numbers from 0 to 100 is ${odd}`)

// Printing sum of all even and odd numbers from 0 to 100 in an array
let arrEvenOddSum = [0, 0]
for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        arrEvenOddSum[0] += i;
    } else if (i % 2 > 0) {
        arrEvenOddSum[1] += i;
    }
};
console.log(arrEvenOddSum)

// Generating an array of 5 random numbers
let randomArray = [];
for (let i = 0; i < 5; i++) {
    randomArray.push(Math.floor(Math.random() * 10));
};
console.log(randomArray)

//  Generating a unique array of 5 random numbers
let uniqueRandomArr = [];
for (let i = 5; uniqueRandomArr.length < i;) {
    let randNum = Math.floor(Math.random() * 10);
    if (uniqueRandomArr.indexOf(randNum) === -1) {
        uniqueRandomArr.push(randNum);
    }
};
console.log(uniqueRandomArr)

// Generating random 6 characters
let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
let randomChars = ""
for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * chars.length);
    randomChars += chars[random];
};
console.log(randomChars)


// EXERCISE: LEVEL 2

// Generating any number of characters
let char = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
let nuM = Math.floor(Math.random() * char.length);
let randChars = ""
for (let i = 0; i < nuM; i++) {
    let random = Math.floor(Math.random() * char.length);
    randChars += char[random];
};
console.log(randChars);

// Countries array manipulation
let countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"];
let countriesLength = [];
for (let i = 0; i < countries.length; i++) {
    countriesLength.push([countries[i], countries[i].slice(0, 3), countries[i].length])
};
console.log(countriesLength)

// Countries with and without 'Land'
let countryWithoutLand = []
let countryWithLand = []
for (let i = 0; i < countries.length; i++) {
    if (countries[i].includes("LAND")) {
        countryWithLand.push(countries[i]);
    } else {
        countryWithoutLand.push(countries[i])
    }
};
console.log(`${countryWithoutLand} , All these countries are without LAND`)
console.log(countryWithLand)

// countries with and without 'IA'
let countryWithIa = []
let countryWithoutIa = []
for (let i = 0; i < countries.length; i++) {
    if (countries[i].includes("IA")) {
        countryWithIa.push(countries[i]);
    } else {
        countryWithoutIa.push(countries[i])
    }
};
console.log(`${countryWithoutIa} , these countries end without IA`)
console.log(countryWithIa)

// Countries with 5 characters
let countriesWithFiveChars = [];
for (let i = 0; i < countries.length; i++) {
    if (countries[i].length === 5) {
        countriesWithFiveChars.push(countries[i])
    }
};
console.log(countriesWithFiveChars)

// Longest word in webTech Array
let webTechs = ["html", "css", "javascript", "vue", "react", "mongodb", "angular"];
let webTechsLength = [];
for (let i = 0; i < webTechs.length; i++) {
    webTechsLength.push(webTechs[i].length);
};
console.log(webTechsLength);
let longestChar;
longestChar = Math.max.apply(null, webTechsLength);
console.log(longestChar)
console.log(webTechs[webTechsLength.indexOf(longestChar)]);

// Array of Arrays (Webtech)
let newWebTechArr = [];
for (let i = 0; i < webTechs.length; i++) {
    newWebTechArr.push([webTechs[i], webTechs[i].length])
};
console.log(newWebTechArr)

// MERN Stack Acronym
let mernStack = ["MongoDb", "Express", "React", "Node"]
let mern = ""
for (let i = 0; i < mernStack.length; i++) {
    mern += mernStack[i].slice(0, 1);
};
console.log(mern)

// Reversing order of fruits array using for loop
let fruits = ['banana', 'orange', 'mango', 'lemon']
let newFruits = []
for (let i = fruits.length - 1; i >= 0; i--) {
    newFruits.push(fruits[i]) 
};
console.log(newFruits)

