// EXERCISE: LEVEL 1

// Declaring a function
function fullName() {
    console.log('Gregory Essuman')
};

fullName() // Calling/Invoking the function

// Function with a parameter
function printfullName(firstName, lastName) {
    console.log(`My fullname is ${firstName} ${lastName}`)
};

printfullName('Gregory', 'Essuman')

// Function which adds two numbers
function addNumbers(num1, num2) {
    return `The sum of ${num1} and ${num2} is ${num1 + num2} `
};

console.log(addNumbers(55, 10))

// Function calculating area of rectangle
function areaOfRectangle(recLength, recWidth) {
    let area = recLength * recWidth
    return area
};

console.log(areaOfRectangle(5, 5))

// Function returning area of circle
function areaOfCirlce(radius) {
    const PI = 3.14
    let area = PI * radius * radius
    return area
};

console.log(areaOfCirlce(4))

// Function returning volume of rectangular prism
const volumeOfRectPrism = (length, width, height) => {       // Arrow function used here
    let volume = length * width * height
    return volume
};

console.log(volumeOfRectPrism(5, 7, 13))

// Function returning perimeter of a rectangle
const perimeterOfRectangle = (length, width) => {          // Arrow function used here
    let perimeter = 2 * (length * width);
    return perimeter;
};
console.log(perimeterOfRectangle(10, 20))

// Function to convert celsius to fahrenheit
const convertCelsiusToFahrenheit = (celsius) => {               // Arrow function used here
    let fahrenheit = (celsius * 9 / 5) + 32
    return fahrenheit;
};
console.log(convertCelsiusToFahrenheit(38))

// Function to calculate BMI
const bmI = (weight, height) => {
    let bmi = weight / (height * height)                // Arrow function used here
    if (bmi < 18.5) {
        return 'underweight'
    } else if (bmi > 18.5 && bmi < 24.9) {
        return 'overweight'
    } else if (bmi > 25 && bmi < 29.9) {
        return 'overweight'
    } else {
        return 'obese'
    }
};
console.log(bmI(65, 7))