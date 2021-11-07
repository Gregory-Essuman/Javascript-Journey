// EXERCISE: LEVEL 1

 
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Gregory', 'Essuman', 'Amponsah', 'Yaw']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

// ForEach Higher Order Function
const printElements = (elem) => console.log(elem);        // Call back function
countries.forEach(printElements);
names.forEach(printElements);
numbers.forEach(printElements);

// Map Higher Order Function
let upperCaseCountries = countries.map(country => {     // Countries array to Upper Case
    return country.toUpperCase();
})
console.log(upperCaseCountries);

let countriesLength = countries.map(country => {        // Countries array length mapped
    return country.length;
})
console.log(countriesLength);

let squaredNumbers = numbers.map(num => {               // Numbers array squared
    return num * num;
})
console.log(squaredNumbers);

let namesUpper = names.map(name => {                    // Names array to Upper Case
    return name.toUpperCase();
})
console.log(namesUpper);

let productPrices = products.map(product => {           // Products array mapped (products to prices)
    return `${product.product}:${product.price}`;
})
console.log(productPrices);

// Filter Higher Order Function
let countriesWithLand = countries.filter(country => {   // Filtering countries with 'land'
    return country.toLowerCase().includes("land");
})
console.log(countriesWithLand);

let countriesWithSixChars = countries.filter(country => {   // Filtering countries with 6 characters
    return country.length === 6;
})
console.log(countriesWithSixChars);

let countriesWithSixCharsAbove = countries.filter(country => {  // Filtering countries with characters above equal to 6
    return country.length >= 6;
})
console.log(countriesWithSixCharsAbove);

let countriesStartingWithE = countries.filter(country => {      // Filtering countries beginning with 'E'
    return country[0].toUpperCase === "E";
})
console.log(countriesStartingWithE);

let pricesWithValues = products.filter(product => {             // Filtering out prices with values in products array
    return product.price > 0;
})
console.log(pricesWithValues);

// Reduce Higher Order Function
let numSum = numbers.reduce((accumulator, currentValue) => {    // Reducing the numbers array
    return accumulator + currentValue;
})
console.log(numSum);

let concatStr = countries.reduce((accumulator, currentValue) => {   // Concatenating the countries text string
    return accumulator + currentValue;
})
console.log(concatStr);