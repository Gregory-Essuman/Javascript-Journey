// EXERCISE: LEVEL 1

// Checking data types of variables
let firstName = 'Gregory'
let lastName = 'Essuman'
let country = 'Ghana'
let city = "Accra"
let age = 99
let isMarried = false
let year = 2021

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof year)

console.log(typeof '10' === 10)
console.log(parseInt('9.8') === 10)

// Truthy and Falsy statements
let myCar = true
let trueVal = 5 > 3
let isABoy = true

let myWallet = null
let falseVal = 9 > 90
let myBook

// Comparison Expressions
console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')
console.log(('python'.length) != ('jargon'.length))

// Comparison Expressions with Logical Operators
console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))

let dragon = 'dragon'
let python = 'python'
console.log(!(dragon.includes('on')))    
console.log(!(python.includes('on')))

// Date Object manipulations
let rightNow = new Date()
console.log(rightNow.getFullYear())
console.log(rightNow.getMonth())
console.log(rightNow.getDate())
console.log(rightNow.getDay())
console.log(rightNow.getHours())
console.log(rightNow.getMinutes())
console.log(rightNow.getTime())


// EXERCISE: LEVEL 2

// Windows Methods (prompt, alert)
let base = prompt('Enter base:')
let height = prompt('Enter height:')
let area = 0.5 * base * height
console.log(`The area of the triangle is: ${area}`)

let sideA = parseInt(prompt('Enter side a:'))
let sideB = parseInt(prompt('Enter side b:'))
let sideC = parseInt(prompt('Enter side c:'))
let perimeter = sideA + sideB + sideC
console.log(`The perimeter of the triangle is: ${perimeter}`)

let len = parseInt(prompt('Enter len:'))
let width = parseInt(prompt('Enter width:'))
let area1 = len * width
let perimeter1 = 2 * (len + width)
console.log(`The area is: ${area1}`)
console.log(`The perimeter is ${perimeter1}`)

let radius = parseInt(prompt('Enter radius:'))
const PI = 3.14
let area2 = PI * radius * radius
let circm = 2 * PI * radius
console.log(`The area of the circle is: ${area2}`)
console.log(`The circumference of the circle is: ${circm}`)

let xCoord = parseInt(prompt('Enter xCoord:'))
let xIntercept = (2 * xCoord) - 2
let slope = (10 - 2)/(6 - 2)
let yIntercept = 2
console.log(slope)    // Equation y = 2x -2 and this slope are the same in terms of slope value
console.log(xIntercept)   

let xCoord1 = parseInt(prompt('Enter xCoord:'))
let yCoord = (xCoord1 ** 2) + (6 * xCoord1) + 9
console.log(yCoord)  

let workingHours = parseInt(prompt('Enter total working hours:'))
let rateHour = parseInt(prompt('Enter rate per hour:'))
let weeklyEarning = workingHours * rateHour
console.log(`Your weekly earning is: ${weeklyEarning}`)

// Ternary Operators   (condition ? if true : if false)
firstName.length > 7 ? console.log('My name is long') : console.log('My name is short')
firstName.length > lastName.length ? console.log('My first name, Gregory is longer than my family name, Essuman') : console.log('My first name, Gregory is shorter or equal to my family name, Essuman')

let myAge = 250
let yourAge = 25
myAge > yourAge ? console.log(`I am ${myAge - yourAge} older than you`) : console.log(`You are ${yourAge - myAge} older than me or we are same age`)

let birthYear = parseInt(prompt('Enter birth year:'))
let allowedAgeToDrive = 18
let userAge = 2021 - birthYear 
userAge >= 18 ? console.log(`You are ${userAge}. You are old enough to drive`) : console.log(`You are ${userAge}. You will be allowed to drive after ${18 - userAge} years`)

let secondsInsec = 60;
let secondsInHr = secondsInsec * 60;
let secondsInDay = secondsInHr * 24;
let secondsInYear = secondsInDay * 365;
let yearsLived = Number(prompt("how many years have you lived?"));
let secondsLived = yearsLived * secondsInYear;
console.log(`you lived ${secondsLived} seconds`)


// EXERCISE: LEVEL 3

// Date Time Objet
let date = new Date();
console.log(`year:${date.getFullYear()}`);
console.log(`year:${date.getMonth()}`);
console.log(`year:${date.getDate()}`);
console.log(`year:${date.getDay()}`);
console.log(`year:${date.getHours()}`)
console.log(`year:${date.getMinutes()}`)
console.log(`year:${date.getSeconds()}`);
let YYYMMDD = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`
let DDMMYYYY = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()} ${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`
let DdMmYYy = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`
console.log(YYYMMDD);
console.log(DDMMYYYY);
console.log(DdMmYYy);