// EXERCISE: LEVEL 1

// Displaying an array as table in console
const countries = [
    ['Ghana', 'Accra'],
    ['Ivory Coast', 'Abidjan'],
    ['Nigeria', 'Lagos']
]
console.table(countries)

// Displaying user object as a group
const user = {
    name: 'Gregory',
    title: 'Geospatial Data Scientist',
    country: 'Ghana',
    city: 'Accra',
    age: 90
  }
  const users = [
    {
      name: 'Gregory',
      title: 'Geospatial Data Scientist',
      country: 'Ghana',
      city: 'Accra',
      age: 90
    },
    {
      name: 'Daniel',
      title: 'Full Stack Dev',
      country: 'Kenya',
      city: 'Nairobi',
      age: 38
    },
    {
      name: 'Amponsah',
      title: 'Full Stack GIS Dev',
      country: 'USA',
      city: 'Atlanta',
      age: 97
    },
    {
      name: 'Ellie',
      title: 'Software Engineer',
      country: 'South Africa',
      city: 'Pretoria',
      age: 49
    }
  ]
  
  console.group('Names')
  console.log(name)
  console.groupEnd()
  
  console.group('Countries')
  console.log(countries)
  console.groupEnd()
  
  console.group('Users')
  console.log(user)
  console.log(users)
  console.groupEnd()


// EXERCISE: LEVEL 2

// Assertion message
console.assert(10 > 2 * 10, "Incorrect")

// Warning message
console.warn("Last Try")

// Error message
console.error("Error Occurred")


// EXERCISE: LEVEL 3

// Speed Difference between loops (while, for, for of, forEach)  
// While Loop speed 
  console.time("while loop")
  let i = 0
  while (i < countries.length) {
    console.log(countries[i][0], countries[i][1])
    i++
  }
  console.timeEnd("while loop")

// For loop Speed
  console.time('Regular for loop')
  for (let i = 0; i < countries.length; i++) {
    console.log(countries[i][0], countries[i][1])
  }
  console.timeEnd('Regular for loop')

// For of loop speed  
  console.time('for of loop')
  for (const [name, city] of countries) {
    console.log(name, city)
  }
  console.timeEnd('for of loop')

// For Each loop speed  
  console.time('forEach loop')
  countries.forEach(([name, city]) => {
    console.log(name, city)
  })
  console.timeEnd('forEach loop')