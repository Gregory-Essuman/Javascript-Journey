// EXERCISE: LEVEL 2

// Countries and WebTech Array being modified

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

// Splitting the text into an array
let text = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python."
text.split("");
console.log(text.length);
console.log(text)

// Modifying the shopping cart array 
let shoppingCart = ["milk", "coffee", "tea", "honey"]
shoppingCart.unshift("meat");
shoppingCart.push("sugar");
shoppingCart[shoppingCart.indexOf("tea")] = "green tea";

// Modifying the countries array
if (countries.includes("Ethiopia")) {
    console.log("ETHIOPIA")
} else {
    countries.push("Ethiopia");
}

// Modifying the WebTech array
if (webTechs.includes("sass")) {
    console.log("sass is a css preprocessor")
} else {
    webTechs.push("Sass");
}

// Concatenating two arrays
let frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
let backEnd = ['Node', 'Express', 'MongoDB'];
console.log(frontEnd.concat(backEnd))

// EXERCISE: LEVEL 3

// Array manipulation and basic stats
let ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
let minAge = ages.sort()[0]
let maxAge = ages.sort()[ages.length - 1]
console.log(minAge)
console.log(maxAge)
let medianAge = ages[Math.floor(ages.length / 2)]
console.log(medianAge)
let avgAge
for (i = 0; i < ages.length; i++) {
    let totalAge = 0
    totalAge += ages[i]
    avgAge = totalAge / ages.length
};
console.log(avgAge)
let range = maxAge - minAge
console.log(range)
let absMinAvg = Math.abs(minAge - avgAge) 
let absMaxAvg = Math.abs(maxAge - avgAge)
console.log(absMinAvg)
console.log(absMaxAvg)


// Middle country
let middleCountry = countries[Math.floor(countries.length / 2)]
console.log(middleCountry)

// Dividing countries array into two based on even or odd
if (countries.length % 2 === 0) {
    let countryArray1 = countries.length / 2
    console.log(countries.slice(0, countryArray1))
    console.log(countries.slice(countryArray1 + 1,countries.length - 1))
} else {
    countries.push("Ghana")
    let countryArray2 = countries.length / 2
    console.log(countries.slice(0, countryArray2))
    console.log(countries.slice(countryArray2 + 1, countries.length - 1))
}

