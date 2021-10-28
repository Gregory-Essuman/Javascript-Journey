// EXERCISE: LEVEL 1

let challenge = '30 Days Of JavaScript'
console.log(challenge)

// Printing the length of the string
console.log(challenge.length)

// To Upper Case
console.log(challenge.toUpperCase())

// To Lower Case
console.log(challenge.toLowerCase())

// Cut(slice) first word
console.log(challenge.substr(0,2))
console.log(challenge.substring(0,2))
console.log(challenge.substring(2,))

// Checking for a word using incudes
console.log(challenge.includes('Script'))

// Splitting a string
console.log(challenge.split())
console.log(challenge.split(' '))
console.log('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(','))

// Replacing strings
console.log(challenge.replace('JavaScript', 'Python'))

// Finding character using CharAt
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt(11))

// Finding positions of strings
console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))
console.log('You cannot end a sentence with because because because is a conjunction'.indexOf('because'))
console.log('You cannot end a sentence with because because because is a conjunction'.lastIndexOf('because'))
console.log('You cannot end a sentence with because because because is a conjunction'.search('because'))

// Trimming a string
console.log('  30 Days Of JavaScript  '.trim())

// Affirming if string starts and ends with a substring
console.log(challenge.startsWith('30'))
console.log(challenge.endsWith('Script'))

// Matching a string
let pattern = /a/gi 
console.log(challenge.match(pattern))

// Concatenating strings
console.log('30 Days of' + ' JavaScript')

// Repeating strings
console.log(challenge.repeat(2))


// EXERCISE: LEVEL2

// Escaping sequences and logging messages to the console
console.log("The quote 'There is no exercise better for the heart\
 than reaching down and lifting people up.' by John Holmes teaches\
 us to help one another.")

console.log('"Love is not patronizing and charity isn\'t about pity, it is about love.\
 Charity and love are the same -- with charity you give love, so don\'t just give money\
 but reach out your hand instead."')

 // Checking data types and casting
 let num = '10'
 console.log(typeof num)
 let numInt = parseInt(num)
 console.log(numInt) 

console.log(parseFloat('9.8') == 10)
console.log((Math.round(parseFloat('9.8')) == 10 ))

// Checking if substring is in string
console.log('python'.includes('on'))
console.log('jargon'.includes('on'))
console.log('I hope this course is not full of jargon.'.includes('jargon'))

// Generating Random Numbers b/n 0 and 100 inclusive
let randomNum = Math.random()         // generates 0 to 0.999
let numBtnZeroAndHundred = randomNum * 100

console.log(numBtnZeroAndHundred)         // this gives: min 0 and max 100

let randomNumRoundToCeil = Math.round(numBtnZeroAndHundred)
console.log(randomNumRoundToCeil)    // this gives between 0 and 100

// Generating Random Numbers b/n 50 and 100 inclusive
let randomNum1 = Math.random()         // generates 0 to 0.999
let numBtnFiftyAndHundred = randomNum1 * 50

console.log(numBtnFiftyAndHundred)         // this gives: min 0 and max 50

let randomNumRoundToFloor = Math.floor(numBtnFiftyAndHundred)
console.log(randomNumRoundToFloor + 50)   // this gives between 50 and 100

// Generating Random Numbers b/n 0 and 255 inclusive
let randomNum2 = Math.random()         // generates 0 to 0.999
let numBtnZeroAndTwoFiveFive = randomNum2 * 255

console.log(numBtnZeroAndTwoFiveFive)         // this gives: min 0 and max 255

let randomNumRoundToCeil1 = Math.round(numBtnZeroAndTwoFiveFive)
console.log(randomNumRoundToCeil1)    // this gives between 0 and 255

// Accessing string characters using random numbers
let theNumber = Math.floor(Math.random() * 10)
console.log('JavaScript'.charAt(theNumber))

// Using escape characters to print a pattern
console.log('\n\
    1 1 1 1 1\n\
    2 1 2 4 8\n\
    3 1 3 9 27\n\
    4 1 4 16 64\n\
    5 1 5 25 125')

// Slicing out a phrase from a sentence
let firstIndex = 'You cannot end a sentence with because because because is a conjunction'.indexOf('because')
console.log('You cannot end a sentence with because because because is a conjunction'.substr(firstIndex, 23))


// EXERCISE: LEVEL 3

// Counting a word in the sentence
let lovePattern = /love/gi
console.log('Love is the best thing in this world. Some found their love and some are still looking for their love.'.match(lovePattern))
let becausePattern = /because/gi
console.log('You cannot end a sentence with because because because is a conjunction'.match(becausePattern))

// cleaning messy text
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let charClassPattern = /[$-@#/:-?{-~!"^_`\[\]]/gi
console.log(sentence.replace(charClassPattern, ''))

// Extracting Number from string and performing operations
let text = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month."
let salaries = text.match(/\d+/g);
let totalAnnualIncome = 0;
salaries.forEach(element => {
    totalAnnualIncome += Number(element);
})
console.log(totalAnnualIncome)
