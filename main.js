import { films } from "./assets/films.js"
import { people } from "./assets/people.js"
import { planets } from "./assets/planets.js"



let mainArea = document.querySelector('main')
let section = document.querySelector('section')
people.forEach((person) => {
    let personDiv = document.createElement('div')
    let name = document.createElement('h1')
    let gender = document.createElement('p')
    let pic = document.createElement('img')
    let charNum = getCharNumber(person.url)

    name.textContent = person.name
    gender.textContent = person.gender
    pic.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`

    personDiv.appendChild(name)
    personDiv.appendChild(gender)
    personDiv.appendChild(pic)
    personDiv.className = "person-div";

    // mainArea.appendChild(personDiv)
    document.getElementById('people').appendChild(personDiv)

});
// films.forEach((film) => {
//     let filmDiv = document.createElement('div')
//     let title = document.createElement('h1')
//     let director = document.createElement('p')
//     let pic = document.createElement('img')
//     let charNum = getCharNumber(film.url)

//     title.textContent = film.title
//     director.textContent = film.director
//     pic.src = `https://starwars-visualguide.com/assets/img/films/${charNum}.jpg`

//     filmDiv.appendChild(title)
//     filmDiv.appendChild(director)
//     filmDiv.appendChild(pic)
//     // filmDiv.className = "person-div";

//     mainArea.appendChild(filmDiv)
// });
let planetList = planets.slice(1, 15);
planetList.forEach((planet) => {
    let planetDiv = document.createElement('div')
    let name = document.createElement('h1')
    let population = document.createElement('p')
    let pic = document.createElement('img')
    let charNum = getCharNumber(planet.url)

    name.textContent = planet.name
    population.textContent = planet.population
    pic.src = `https://starwars-visualguide.com/assets/img/planets/${charNum}.jpg`

    planetDiv.appendChild(name)
    planetDiv.appendChild(population)
    planetDiv.appendChild(pic)
    planetDiv.className = "person-div";





    document.getElementById('planets').appendChild(planetDiv)

});


// personDiv.setAttribute("style", "display: hidden;")


function getCharNumber(charURL) {
    let end = charURL.lastIndexOf('/')
    let charID = charURL.substring(end - 2, end)
    if (charID.indexOf('/') !== -1) {
        return charID.slice(1, 2)
    } else {
        return charID
    }
}

const allDivs = Array.from(document.querySelectorAll('div'))
console.log(allDivs)
const mainHeader = document.querySelector('header')
let maleButton = document.createElement('button', 'reset')
maleButton.textContent = 'Male Characters'
maleButton.addEventListener('click', () => {
    maleCharacters.forEach(character => {
        femaleButton.removeAttribute('styel', 'display: none');
        let matchedDiv = allDivs.find(oneDiv => {
            return oneDiv.firstChild.textContent === character.name
        })

        matchedDiv.classList.toggle('person-div');
    })


})

// location.reload();


let femaleButton = document.createElement('button')
femaleButton.textContent = 'Female Characters'
femaleButton.addEventListener('click', () => {
    femaleCharacters.forEach(character => {

        let matchedDiv = allDivs.find(oneDiv => {
            return oneDiv.firstChild.textContent === character.name
        })
        matchedDiv.classList.toggle('person-div');
    })


})
let planetButton = document.createElement('button')
planetButton.textContent = 'planets'
planetButton.addEventListener('click', () => {
    planetList.forEach(character => {

        let matchedDiv = allDivs.find(oneDiv => {
            return oneDiv.firstChild.textContent === character.name
            clearElement(matchedDiv);

        })

        matchedDiv.classList.toggle('person-div');

    })
    filmDiv.classList.toggle('person-div');

})




mainHeader.appendChild(maleButton)
mainHeader.appendChild(femaleButton)
mainHeader.appendChild(planetButton)


const maleCharacters = people.filter(person => person.gender === 'male')
const femaleCharacters = people.filter(person => person.gender === 'female')
const otherCharacters = people.filter(person => person.gender === 'n/a' || person.gender === 'none' || person.gender === "hermaphrodite")

console.log(maleCharacters)
console.log(femaleCharacters)


