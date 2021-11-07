// EXERCISE: LEVEL 1

// Sets 
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
// const countries = ['Finland', 'Sweden', 'Norway']

// Creating an empty set
const newSet = new Set();

// Using loop to add elements to a set
for (let i = 0; i <= 10; i++) {
    newSet.add(i);
}
console.log(newSet);

//Removing an element from a set
newSet.delete(5);
console.log(newSet)

// Clearing a set
newSet.clear();

// Creating a set of strings from array
let greggsTechLove = ["Gregory", "Amponsah", "Essuman", "loves", "python"]
let greggsTechLoveSet = new Set();
greggsTechLove.forEach(item => {
    greggsTechLoveSet.add(item);
})
console.log(greggsTechLoveSet);

// Map

// Creating a map of countries and number of characters in the country.
let newCountries = [
    ["South Africa", 11], 
    ["India", 5], 
    ["Russia", 6], 
    ["Kenya", 5],
    ["Ethiopia", 8], 
    ["Morocco", 7],
    ["Togo", 4], 
    ["Namibia", 7]
]
let countriesLength = new Map(newCountries);
console.log(countriesLength);
console.log(countriesLength.size);


// EXERCISE: LEVEL 2

//Union and Intersection
let A = new Set(a);
let B = new Set(b);

// Union
let union = [...a, ...b]
console.log(union);

// Intersection
let intersection = a.filter(num => {
    return B.has(num);
})
console.log(intersection);
