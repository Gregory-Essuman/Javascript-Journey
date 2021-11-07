// EXERCISE: LEVEL 1

// Creating an Animal Class
class Animal{
    constructor(name, age, color, legs){
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
        this.anmType = []
    }

    getAnimalInfo(){
        console.log(`Animals name is ${this.name}. It's ${this.age} years old and ${this.color} in color with ${this.legs} legs`);
    }

    set setanmtype(anmType){
        this.anmType.push(anmType)
    }
}

// Dog and Cat Child Class
class Dog extends Animal{
    constructor(name, age, color, legs){
        super(name, age, color, legs)
    }

    // Overriding the getAnimalInfo method
    getAnimalInfo(){
        console.log(`${this.name} is a Dog`);
    }
}

class Cat extends Animal{
    constructor(name, age, color, legs){
        super(name, age, color, legs)
    }

    // Overriding the getAnimalInfo method
    getAnimalInfo(){
        console.log(`${this.name} is a Cat`);
    }
}

// Initializing new objects of the Animal, Dog and Cat Classes
const animalA = new Animal('Boggie', 3, 'Brown', 4)
const doggie = new Dog('Ebony', 4, 'black', 4)
const cattie = new Cat('Joseph', 10, 'grey', 2)

console.log(animalA);
console.log(doggie);
console.log(cattie);
console.log(animalA.getAnimalInfo());
console.log(doggie.getAnimalInfo());
console.log(cattie.getAnimalInfo());
