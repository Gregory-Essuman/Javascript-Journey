// EXERCISE: LEVEL 1

// If else
let userInput = Number(prompt('Enter your age:'))

if (userInput >= 18){
    console.log('You are old enough to drive')
} else{
    console.log(`You are left with ${18 - userInput} years to drive`)
}

let yourAge = Number(prompt('Enter your age:'))
let myAge = 250

if (yourAge > myAge){
    console.log(`You are ${yourAge - myAge} years older than me`)
} else if(yourAge === myAge){
    console.log('We are the same age')
} else{
    console.log(`I am ${myAge - yourAge} years older than you`)
}

// Q.3 
let a = 4
let b = 3

if (a > b){
    console.log('a is greater than b')
} else{
    console.log('a is less than b')
}

// Using ternary operator
a > b ? console.log('a is greater than b') : console.log('a is less than b')

// Checking if a number is even or not
let num = Number(prompt('Enter a number:'))

if (num % 2 === 0){
    console.log(`${num} is an even number`)
} else{
    console.log(`${num} is an odd number`)
}

// EXERCISE: LEVEL 2
let score = Number(prompt('Enter a score:'))

if (score >= 80 && score <= 100){
    console.log('A')
} else if (score >= 70 && score <= 79){
    console.log('B')
} else if (score >= 60 && score <= 69){
    console.log('C')
} else if (score >= 50 && score <= 59){
    console.log('D')
} else{
    console.log('F')
}

// Checking seasons
let month = prompt('Enter a month:')

switch(month){
    case 'September': 
    case 'October':  
    case 'November':
        console.log('The season is Autumn')
        break
    case 'December': 
    case 'January': 
    case 'February':
        console.log('The season is winter')
        break
    case 'March':
    case 'April': 
    case 'May':
        console.log('The season is spring')
        break
    case 'June': 
    case 'July': 
    case 'August':
        console.log('The season is summer')
        break
    default:
        console.log('Entered text is not a month')
}

// Checking Weekdays or Weekends
let wkDay = prompt("Enter a day(Begin with caps):")
if (wkDay == "Saturday" || wkDay == "Sunday") {
    console.log(`${wkDay} is a weekend`)
} else if (wkDay == "Monday" || wkDay == "Tuesday" || wkDay == "Wednesday" || wkDay == "Thursday" || wkDay == "Friday") {
    console.log(`${wkDay} is a working day`)
} else {
    console.log("Enter a correct day.")
}

// Checking number of days in a month
let userMonth = prompt('Enter a month:') 
switch (userMonth) {
    case "January":
    case "March":
    case "May":
    case "July":
    case "August":
    case "October":
    case "December":
        console.log(`${userMonth} has 31 days`)
        break;
    case "April":
    case "June":
    case "September":
    case "November":
        console.log(`${userMonth} has 30 days`)
        break;
    case "February":
        console.log(`${userMonth} has 29 days`)
        break;
    default:
        console.log("invalid. Begin with a caps");
}