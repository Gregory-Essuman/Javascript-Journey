// EXERCISE: LEVEL 1

// Retrieving digits from text and calculating annual income
let txt = "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month."
let salary = txt.match(/\d+/g);             // Matches one or more digits globally in the text.
let totalAnnualIncome = 0;                  // Initializing total annual income variable. 
salary.forEach(element => {                 // Accessing each matched string(numbers) and\ 
    totalAnnualIncome += Number(element);   // incrementing the total annual income variable. string is parsed to a Number type. 
})
console.log(salary);                        // Checking if the matched strings are exact by printing to the console. 
console.log(totalAnnualIncome);             // Printing the total annual income variable to the console. 

// Validating Javascript variable names
const pattern = /[F/f]irst[Nn]ame|[F/f]irst_[Nn]ame/        // pattern to be matched
const isValidVariable = (str) => {                          // Function expression to validate if input string is a valid Javascript variable
    console.log(pattern.test(str));
}
isValidVariable('first_name');                              // Validation the input string by calling th function expression.
