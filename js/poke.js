
/*async function getPokemonData(url){
    const response = await fetch(url)
    return await response.json()
}*/
let myRandomNum = function random() {
    console.log(Math.round(Math.random() * 450))

}
class Pokemon {
    constructor(id, name, pokeNum) {
        this.id = id;
        this.name = name;
        this.pokeNum = pokeNum;
    }
}


const CreatedPoke = new Pokemon(31, 'Lord Voldemort', 10);
const newButton = document.querySelector('#newPokemon')
newButton.addEventListener('click', function () {
    populateDom(CreatedPoke)
})

async function getAPIData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

console.log(myRandomNum(4))
const theData = getAPIData('https://pokeapi.co/api/v2/pokemon/?limit=30&offset=450').then(data => {
    for (const pokemon of data.results) {
        getAPIData(pokemon.url)
            .then(pokedata => {
                populateDom(pokedata)
                // console.log(pokedata)

            })
    }
    // populateDom(CreatedPoke)

})

let mainArea = document.querySelector('main')
// let createNew = document.querySelector('.create')

function populateDom(single_pokemon) {
    let pokeCard = document.createElement('div')
    let pokeScene = document.createElement('div')
    let pokeFront = document.createElement('div')
    let pokeBack = document.createElement('div')

    fillCardFront(pokeFront, single_pokemon)
    fillCardBack(pokeBack, single_pokemon)

    pokeScene.setAttribute('class', 'scene')
    pokeCard.setAttribute('class', 'card')
    pokeCard.appendChild(pokeFront)
    pokeCard.appendChild(pokeBack)
    pokeScene.appendChild(pokeCard)

    mainArea.appendChild(pokeScene)

    pokeCard.addEventListener('click', function () {
        pokeCard.classList.toggle('is-flipped');
    });
}
function fillCardBack(pokeBack, data) {
    pokeBack.setAttribute('class', 'card__face card__face--back')
    let pokeOrder = document.createElement('p')
    let pokeHP = document.createElement('p')
    pokeOrder.textContent = `Poke Number: ${data.order}`
    // pokeHP.textContent = `Base Hit Points: ${data.stats[0].base_stat}`
    pokeBack.appendChild(pokeOrder)
    pokeBack.appendChild(pokeHP)
    let pokeNum = getPokeNumber(data.id)

    let pic = document.createElement('img')
    pic.setAttribute('class', 'picDivs')
    pic.src = `../images/${pokeNum}.png`
    pokeBack.appendChild(pic)
}
function fillCardFront(pokeFront, data) {
    pokeFront.setAttribute('class', 'card__face card__face--front')
    let name = document.createElement('h3')
    let pic = document.createElement('img')
    let type = document.createElement('p')
    pic.setAttribute('class', 'picDivs')
    let pokeNum = getPokeNumber(data.id)
    name.textContent = capitalize_Words(`${data.name}`)
    // type.textContent = `Type: ${data.types[0].type.name}`
    pokeFront.appendChild(name)
    pic.src = `../images/${pokeNum}.png`
    pokeFront.appendChild(type)
    pokeFront.appendChild(pic)
}

function capitalize_Words(str) {
    return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
}

console.log(capitalize_Words('js string exercises'));


function getPokeNumber(id) {
    if (id < 10) return `00${id}`
    if (id > 9 && id < 100) {
        return `0${id}`
    } else return id
}

