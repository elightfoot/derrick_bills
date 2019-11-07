
/*async function getPokemonData(url){
    const response = await fetch(url)
    return await response.json()
}*/

async function getAPIData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(response)
        return data
    } catch (error) {
        console.log(error)
    }
}

const theData = getAPIData('http://www.omdbapi.com/?i=tt3896198&apikey=f61ea474')
console.log(theData)
    // console.log(theData[0])
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

function populateDom(single_movie) {
    let pokeCard = document.createElement('div')
    let pokeScene = document.createElement('div')
    let pokeFront = document.createElement('div')
    let pokeBack = document.createElement('div')


    fillCardFront(pokeFront, single_movie)
    fillCardBack(pokeBack, single_movie)

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
    pokeHP.textContent = `Base Hit Points: ${data.stats[0].base_stat}`
    pokeBack.appendChild(pokeOrder)
    pokeBack.appendChild(pokeHP)


}
function fillCardFront(pokeFront, data) {
    pokeFront.setAttribute('class', 'card__face card__face--front')
    let name = document.createElement('h3')
    let pic = document.createElement('img')
    pic.setAttribute('class', 'picDivs')
    let pokeNum = getPokeNumber(data.id)
    name.textContent = `${data.Title} height: ${data.height}`
    pokeFront.appendChild(name)
    pic.src = `../images/${pokeNum}.png`
    pokeFront.appendChild(pic)
    pokeFront.appendChild(name)


}
function getPokeNumber(id) {
    if (id < 10) return `00${id}`
    if (id > 9 && id < 100) {
        return `0${id}`
    } else return id
}

