// EXERCISE: LEVEL 1

// Creating Arrays
//const arr = Array()
const arr1 = [1, 2, 4, 5, 6, 5, 4]
console.log(arr1.length) // Finding length of array
let firstItem = [0] // First Item
let middleItem = [3] // Middle Item
let lastItem = [6] // Last Item

let mixedDataTypes = [56, 'Gregory', true, { a: 10, b: 'Yes', c: 'No' }, '98', 'Yellow', 'Brown'] // Mixed data type array
console.log(mixedDataTypes.length)

let companies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'] // Array of tech companies
console.log(companies)
console.log(companies.length)
let firstCompany = [0]
let middleCompany = [3]
let lastCompany = [6]
console.log(companies[0])
console.log(companies[1])
console.log(companies[2])
console.log(companies[3])
console.log(companies[4])
console.log(companies[5])
console.log(companies[6])

// chnaging tech company names to Upper case and printing them to the console
console.log(companies[0].toUpperCase)
console.log(companies[1].toUpperCase)
console.log(companies[2].toUpperCase)
console.log(companies[3].toUpperCase)
console.log(companies[4].toUpperCase)
console.log(companies[5].toUpperCase)
console.log(companies[6].toUpperCase)

// Printing the companies in a sentence
console.log(`${companies[0]}, ${companies[1]}, ${companies[2]}, ${companies[3]}, ${companies[4]}, ${companies[5]} and ${companies[6]} are big tech companies`)

// Checking if a company exist in the array
let companiesIndex = companies.indexOf('IBM')
if (companiesIndex !== -1) {
    console.log(companies[companiesIndex])
} else{
    console.log('Company not found')
}

// Filtering companies with more than one 'o'
let doubleO = []
for (let i = 0; i < companies.length; i++) {
    doubleO.push(companies[i].includes("oo"))
}

// Array methods
companies.sort()
companies.reverse()
companies.slice(0, 3)
companies.slice(companies.length - 3, companies.length)
companies.slice(Math.floor(companies.length / 2), 1)
companies.shift()
companies.pop()
companies.length = 0;


