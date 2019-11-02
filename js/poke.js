
/*async function getPokemonData(url){
    const response = await fetch(url)
    return await response.json()
}*/

async function getAPIData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

const theData = getAPIData('https://pokeapi.co/api/v2/pokemon/')
    .then(data => {
        for (const pokemon of data.results) {
            getAPIData(pokemon.url)
                .then(pokedata => {
                    populateDom(pokedata)
                    console.log(pokedata)
                })
        }
    })

let mainArea = document.querySelector('main')

function populateDom(single_pokemon) {
    let pokeCard = document.createElement('div')
    let pokeScene = document.createElement('div')
    let pokeFront = document.createElement('div')
    let pokeBack = document.createElement('div')
    let name = document.createElement('h3')
    let pic = document.createElement('img')

    pokeScene.setAttribute('class', 'scene')
    pokeCard.setAttribute('class', 'card')
    pokeFront.setAttribute('class', 'card__face card__face--front')
    pokeBack.setAttribute('class', 'card__face card__face--back')
    pic.setAttribute('class', 'picDivs')

    let pokeNum = getPokeNumber(single_pokemon.id)

    name.textContent = `${single_pokemon.name} height: ${single_pokemon.height}`
    pokeFront.appendChild(name)
    pic.src = `../images/${pokeNum}.png`
    pokeFront.appendChild(pic)
    pokeFront.appendChild(name)

    pokeCard.appendChild(pokeFront)
    pokeCard.appendChild(pokeBack)
    pokeScene.appendChild(pokeCard)


    mainArea.appendChild(pokeScene)

    pokeCard.addEventListener('click', function () {
        pokeCard.classList.toggle('is-flipped');
    });
}

function getPokeNumber(id) {
    if (id < 10) return `00${id}`
    if (id > 9 && id < 100) {
        return `0${id}`
    } else return id
}

