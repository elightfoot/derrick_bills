
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
// *******************************************************************ALTERNATE POKEMON API FETCHING
const pokedex = document.getElementById('pokedex');

const fetchPokemon = () => {
    const promises = [];
    for (let i = 300; i <= 375; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
        const pokemon = results.map((result) => ({
            name: result.name,
            image: result.sprites['front_default'],
            type: result.types.map((type) => type.type.name).join(', '),
            id: result.id,
            weight: result.weight,
            hp: result.stats[0].base_stat
        }));
        displayPokemon(pokemon);
    });
};


const displayPokemon = (pokemon) => {
    console.log(pokemon);
    let pokeArray = [...pokemon]
    console.log(pokeArray)
    pokeArray.forEach(function (p) {
        console.log(p)

        let pokeCard = document.createElement('div')
        let pokeScene = document.createElement('div')
        let pokeFront = document.createElement('div')
        let pokeBack = document.createElement('div')

        fillFront(pokeFront, p)
        fillBack(pokeBack, p)

        pokeScene.setAttribute('class', 'scene')
        pokeCard.setAttribute('class', 'card')
        pokeCard.appendChild(pokeFront)
        pokeCard.appendChild(pokeBack)
        pokeScene.appendChild(pokeCard)

        mainArea.appendChild(pokeScene)

        pokeCard.addEventListener('click', function () {
            pokeCard.classList.toggle('is-flipped');
        })
        function fillBack(pokeBack, p) {

            pokeBack.setAttribute('class', 'card__face card__face--back')
            let pokeOrder = document.createElement('p')
            let pokeHP = document.createElement('p')
            pokeOrder.textContent = `Poke Number: ${p.id}`
            pokeHP.textContent = `Base Hit Points: ${p.hp}`
            pokeBack.appendChild(pokeOrder)
            pokeBack.appendChild(pokeHP)
            let pokeNum = getPokeNumber(p.id)

            let pic = document.createElement('img')
            pic.setAttribute('class', 'picDivs')
            pic.src = `${p.image}`
            pokeBack.appendChild(pic)
        }

        function fillFront(pokeFront, p) {
            pokeFront.setAttribute('class', 'card__face card__face--front')
            let name = document.createElement('h3')
            let pic = document.createElement('img')
            let type = document.createElement('p')
            let weight = document.createElement('h3')
            weight.textContent = `Weight: ${p.weight}`
            pic.setAttribute('class', 'picDivs')
            let pokeNum = getPokeNumber(p.id)
            name.textContent = capitalize_Words(`${p.name}`)
            type.textContent = `Type: ${p.type}`
            pic.src = (`${p.image}`)
            pokeFront.appendChild(name)
            pokeFront.appendChild(type)
            pokeFront.appendChild(pic)
            pokeFront.appendChild(weight)

        }


    });

    // const pokemonHTMLString = pokemon
    //     .map(
    //         (pokeman) => `
    //     <div class="card">
    //         <div class = "inside">
    //         <img class="card-image" src="${pokeman.image}"/>
    //         <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
    //         <p class="card-subtitle">Type: ${pokeman.type}</p>
    //         </div>
    //         </div>
    // `
    //     )
    //     .join('');
    // pokedex.innerHTML = pokemonHTMLString;
};

fetchPokemon();

