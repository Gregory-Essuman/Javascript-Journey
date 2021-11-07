// EXERCISE: LEVEL 1

// Changing the skills array to JSON
const skills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python']
const skillsText = JSON.stringify(skills)
console.log(skillsText);

// Stringifying the age variable
let age = 90;
const ageText = JSON.stringify(age)
console.log(ageText)

// Stringifying the isMarried variable
let isMarried = true
const isMarriedText = JSON.stringify(isMarried)
console.log(isMarriedText);

// Stringifying the student object
const student = {
    firstName: 'Gregory',
    lastName: 'Essuman',
    age: 90,
    isMarried: true,
    skills: ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python', ]
}
const studentText = JSON.stringify(student)
console.log(studentText);