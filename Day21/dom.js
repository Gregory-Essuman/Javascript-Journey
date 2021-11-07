// EXERCISE: LEVEL 1

// Getting Html elements 
const first = document.querySelector("#first");
const second = document.querySelector("#second");
const third = document.querySelector("#third");
const fourth = document.querySelector("#fourth");
console.log(first);
console.log(second);
console.log(third);
console.log(fourth);

// Getting all the P element tags as nodelist
let pElementTag = document.querySelectorAll('p');
//console.groupCollapsed(pS)

pElementTag.forEach(p => {
    console.log(p.textContent)
})

// Setting text content to the fourth paragraph
pElementTag[3].textContent = "fourth paragraph"

// Setting classname and id 
pElementTag[0].className = "first-paragraph"
pElementTag[0].id = "first"

// Setting Attribute
pElementTag[1].setAttribute("class", "second-paragraph")
pElementTag[1].setAttribute("id", "second")
pElementTag[2].setAttribute("class", "third-paragraph")
pElementTag[2].setAttribute("id", "third")