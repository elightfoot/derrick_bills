import { starships } from "../assets/starships.js"
import { people } from "../assets/people.js"
import { planets } from "../assets/planets.js"
let planetList = planets.slice(1, 15);
let shipList = starships.slice(1, 15);

let mainArea = document.querySelector('main')

function showShipsArray(arrayOfShips) {
    arrayOfShips.forEach(ship => {
        let personDiv = document.createElement('div')
        let name = document.createElement('h1')
        let model = document.createElement('p')
        let pic = document.createElement('img')
        let cost = document.createElement('p')


        personDiv.setAttribute('class', 'charDivs');
        pic.setAttribute('class', 'picDivs')

        let charNum = getCharNumber(ship.url)


        name.textContent = ship.name
        model.textContent = ship.model

        pic.src = `https://starwars-visualguide.com/assets/img/starships/${charNum}.jpg`
        cost.textContent = `Cost in Imperial Credits: ${ship.cost_in_credits}`

        personDiv.appendChild(name)
        personDiv.appendChild(model)
        personDiv.appendChild(pic)
        personDiv.className = "person-div";
        personDiv.appendChild(cost)


        mainArea.appendChild(personDiv)

    })
}


function showCharArray(arrayOfPeople) {
    arrayOfPeople.forEach(person => {
        let personDiv = document.createElement('div')
        let name = document.createElement('h1')
        let gender = document.createElement('p')
        let pic = document.createElement('img')

        personDiv.setAttribute('class', 'charDivs');
        pic.setAttribute('class', 'picDivs')

        let charNum = getCharNumber(person.url)


        name.textContent = person.name
        gender.textContent = person.gender
        pic.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`

        personDiv.appendChild(name)
        personDiv.appendChild(gender)
        personDiv.appendChild(pic)
        personDiv.className = "person-div";

        mainArea.appendChild(personDiv)

    })
}

function showPlanetArray(arrayOfPlanets) {
    arrayOfPlanets.forEach(planet => {
        let personDiv = document.createElement('div')
        let name = document.createElement('h1')
        let population = document.createElement('p')
        let diameter = document.createElement('p')
        let pic = document.createElement('img')

        personDiv.setAttribute('class', 'charDivs');
        pic.setAttribute('class', 'picDivs')

        let charNum = getCharNumber(planet.url)


        name.textContent = planet.name
        const populationComma = (Number(planet.population).toLocaleString());

        population.textContent = `Population: ${populationComma}`
        if (planet.population === "unknown") {
            population.textContent = `Unknown`
        }
        else if (planet.population) {
            population.textContent = `Population: ${populationComma}`

        }
        diameter.textContent = `${(planet.diameter / 7917).toFixed(2)} Earth Diameters`
        pic.src = `https://starwars-visualguide.com/assets/img/planets/${charNum}.jpg`

        personDiv.appendChild(name)
        personDiv.appendChild(population)
        personDiv.appendChild(pic)
        personDiv.appendChild(diameter)

        personDiv.className = "person-div";

        mainArea.appendChild(personDiv)


    })


}
// Displays "3,500" if in U.S. English locale

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

const mainHeader = document.querySelector('header')
let maleButton = document.createElement('button')
maleButton.textContent = 'male Characters'
maleButton.addEventListener('click', () => {
    //deletes if there is a previous display of nodes
    deleteNodes()
    showCharArray(maleCharacters)
    //auto reloads to delete display on second click
    maleButton.addEventListener('click', () => {
        location.reload();
    })
})

let femaleButton = document.createElement('button')
femaleButton.textContent = 'Female Characters'
femaleButton.addEventListener('click', () => {
    deleteNodes()
    showCharArray(femaleCharacters)
    femaleButton.addEventListener('click', () => {
        location.reload();
    })
})

let planetButton = document.createElement('button')
planetButton.textContent = 'Planets'
planetButton.addEventListener('click', () => {
    deleteNodes()
    showPlanetArray(planetList)
    planetButton.addEventListener('click', () => {
        location.reload();
    })
})
let otherButton = document.createElement('button')
otherButton.textContent = 'Other Characters'
otherButton.addEventListener('click', () => {
    deleteNodes()
    showCharArray(otherCharacters)
    otherButton.addEventListener('click', () => {
        location.reload();
    })
})
let shipsButton = document.createElement('button')
shipsButton.textContent = 'Ships'
shipsButton.addEventListener('click', () => {
    deleteNodes()
    showShipsArray(shipList)
    shipsButton.addEventListener('click', () => {
        location.reload();
    })
})


function deleteNodes() {
    while (mainArea.firstChild) {
        mainArea.removeChild(mainArea.firstChild);
    }
}



mainHeader.appendChild(maleButton)
mainHeader.appendChild(femaleButton)
mainHeader.appendChild(planetButton)
mainHeader.appendChild(otherButton)
mainHeader.appendChild(shipsButton)





const maleCharacters = people.filter(person => person.gender === 'male')
const femaleCharacters = people.filter(person => person.gender === 'female')
const otherCharacters = people.filter(person => person.gender === 'n/a' || person.gender === 'none' || person.gender === "hermaphrodite")



