// Installation of Node.js, and Google Chrome
// Introduction to Chrome developer tools

// Logging messages to the console

console.log('Hello World!')
console.log('Hello', 'World', '!')
console.log('WELCOME', 'TO', 'MY', 'PAGE')
console.log('Welcome', 'to', 30, 'Days', 'Of', 'JavaScript')

// Single Line Comment

// commenting the code itself with a single comment

// Multiline Comment

/* This is a multiline comment
Multiline comments can take multiple lines
JavaScript is the language of the web
*/ 

// Arithmetic Operations 

console.log(2 + 3) // Addition
console.log(3 - 2) // Subtraction
console.log(2 * 3) // Multiplication
console.log(3 / 2) // Division
console.log(3 % 2) // Modulus - finding remainder
console.log(3 ** 2) // Exponentiation 3 ** 2 == 3 * 3

// Variables Definition

/* Defined using const, var & let.
       Naming Convention
       -----------------
1. A JavaScript variable name should not begin with a number.
2. A JavaScript variable name does not allow special characters except dollar sign and underscore.
3. A JavaScript variable name follows a camelCase convention.
4. A JavaScript variable name should not have space between words.

*/

// Declaring different variables of different data types.
let firstName = 'Gregory' // first name of a person
let lastName = 'Essuman' // last name of a person
let country = 'Ghana' // country
let city = 'Accra' // capital city
let age = 90 // age in years
let isMarried = false

console.log(firstName, lastName, country, city, age, isMarried)

// Declaring variables with number values.
let newAge = 99 // age in years
const gravity = 9.81 // earth gravity  in m/s2
const boilingPoint = 100 // water boiling point, temperature in oC
const PI = 3.14 // geometrical constant

console.log(gravity, boilingPoint, PI)

// Variables declared in one line separated by commas.
let myName = 'Gregory', // name of a person
  job = 'Geospatial Data Scientist',
  live = 'Ghana'
console.log(myName, job, live)