// EXERCISE: LEVEL 1

// DESTRUCTURING ARRAYS
let values = [2.72, 3.14, 9.81, 37, 100];
let [e, pi, gravity, humanBodyTemp, waterBoilingPoint] = values;                  // destructuring values array
console.log(e, pi, gravity, humanBodyTemp, waterBoilingPoint);

let countries = ["finland", "estonia", "sweden", "denmark", "norway"];          // destrucuting countries array
let [fin, est, sweden, den, nor] = countries;
console.log(fin, est, sweden, den, nor);

// destructuring rectangle object 
let rectangle = {
    width: 7.23,
    height: 3.45
};

let {
    width: w,
    height: h
} = rectangle;
console.log(w, h);


// EXERCISE: LEVEL 2

//destructuring the users array using for of loop

const users = [{
    namE: 'Brook',
    scores: 75,
    skills: ['HTM', 'CSS', 'JS'],
    age: 16
},
{
    namE: 'Alex',
    scores: 80,
    skills: ['HTM', 'CSS', 'JS'],
    age: 18
},
{
    namE: 'David',
    scores: 75,
    skills: ['HTM', 'CSS'],
    age: 22
},
{
    namE: 'John',
    scores: 85,
    skills: ['HTML'],
    age: 25
},
{
    namE: 'Sara',
    scores: 95,
    skills: ['HTM', 'CSS', 'JS'],
    age: 26
},
{
    namE: 'Martha',
    scores: 80,
    skills: ['HTM', 'CSS', 'JS'],
    age: 18
},
{
    namE: 'Thomas',
    scores: 90,
    skills: ['HTM', 'CSS', 'JS'],
    age: 20
}
]

for ({
    namE,
    scores,                                             // For of loop to destructure users array
    skills,
    age
} of users) {
console.log(namE, scores, skills, age)
};

for ({
    namE,
    scores,                                             // Users with less than 2 skills 
    skills,
    age
} of users) {
if (skills.length < 2) {
    console.log(namE, scores, skills, age)
}
};