
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

const theData = getAPIData('https://pokeapi.co/api/v2/pokemon/?limit=28&offset=450').then(data => {
    for (const pokemon of data.results) {
        getAPIData(pokemon.url)
            .then(pokedata => {
                populateDom(pokedata)
                // console.log(pokedata)

            })
    }
    // populateDom(CreatedPoke)

})

let mainArea = document.querySelector('.left')

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
    pokeHP.textContent = `Base Hit Points: ${data.stats[0].base_stat}`
    pokeBack.appendChild(pokeOrder)
    pokeBack.appendChild(pokeHP)
    let pokeNum = getPokeNumber(data.id)

    let pic = document.createElement('img')
    pic.setAttribute('class', 'picDivs')
    pic.src = `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${pokeNum}.png`
    pokeBack.appendChild(pic)
}
function fillCardFront(pokeFront, data) {
    pokeFront.setAttribute('class', 'card__face card__face--front')
    let name = document.createElement('h3')
    let pic = document.createElement('img')
    let type = document.createElement('p')
    // pic.setAttribute('class', 'picDivs')
    pic.classList.add('animated', 'bounceInRight', 'delay-4s', 'picDivs')
    let pokeNum = getPokeNumber(data.id)
    name.textContent = capitalize_Words(`${data.name}`)
    type.textContent = `Type: ${data.types[0].type.name}`
    pokeFront.appendChild(name)
    pic.src = `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${pokeNum}.png`
    pokeFront.appendChild(type)
    pokeFront.appendChild(pic)
}

function capitalize_Words(str) {
    return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
}

// console.log(capitalize_Words('js string exercises'));


function getPokeNumber(id) {
    if (id < 10) return `00${id}`
    if (id > 9 && id < 100) {
        return `0${id}`
    } else return id
}
// const pokedex = document.getElementById('pokedex');
class Pokemon {
    constructor(id, name, pokeNum, type) {
        this.id = id;
        this.name = name;
        this.pokeNum = Number(pokeNum);
        // this.type = type;
    }
}
// const CreatedPoke = new Pokemon(31, 'Voldemort', 713, 'fire');
const newButton = document.querySelector('#newPokemon')
newButton.addEventListener('click', function () {
    let pokeId = prompt("please enter a pokemon ID")
    if (pokeId > 0 && pokeId <= 807) {
        getAPIData(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
            .then(result => {
                populateDom(result)
            })
    } else {
        alert('there are no poke with that id')
    }
})

// populateDom(CreatedPoke)


// const CreatedPoke = new Pokemon(31, 'Lord Voldemort', 30);
// const newButton = document.querySelector('#newPokemon')
// newButton.addEventListener('click', function () {
//     populateDom(CreatedPoke)
// })
// class Pokemon {
//     constructor(id, name, pokeNum) {
//         this.name = name;
//         this.image = sprites['front_default'];
//         this.type = types.map((type) => type.type.name).join(', ');
//         this.weight = weight;
//         this.hp = stats[0].base_stat;
//         this.ability = abilities[0].ability.name;
//     }
// }



// *******************************************************************ALTERNATE POKEMON API FETCHING

const fetchPokemon = (num) => {
    const promises = [];
    const numberToShow = Number(num);
    console.log(numberToShow)

    //creates a random number up to 820
    const random = (Math.round(Math.random() * 800))
    console.log(random)
    //uses random number as limit for group up to 15 pokemon
    //could change second number to users choice of how many to pull
    for (let i = random; i <= (random + numberToShow - 1); i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }
    //alternate method for pulling data out of api. this one uses sprites vs the full res images.
    Promise.all(promises).then((results) => {
        console.log(results)
        const pokemon = results.map((result) => ({
            //select api data to add to display card
            name: result.name,
            image: result.sprites['front_default'],
            imageBack: result.sprites['back_default'],
            type: result.types.map((type) => type.type.name).join(', '),
            id: result.id,
            weight: result.weight,
            hp: result.stats[0].base_stat,
            ability: result.abilities[0].ability.name
        }));

        displayPokemon(pokemon);
    });
};

let rightArea = document.querySelector('.right')

const displayPokemon = (pokemon) => {
    console.log(pokemon);
    //spread operator takes the pokemon data and turns it in to an array of objects 
    //that contains the properties and values picked in the const pokemon map.
    let pokeArray = [...pokemon]
    console.log(pokeArray)
    pokeArray.forEach(function (p) {
        // console.log(p)

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

        rightArea.appendChild(pokeScene)

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

            pic.classList.add('bounce')

            pic.src = `${p.imageBack}`
            pokeBack.appendChild(pic)
        }

        function fillFront(pokeFront, p) {
            pokeFront.setAttribute('class', 'card__face card__face--front')
            let name = document.createElement('h3')
            let pic = document.createElement('img')
            let type = document.createElement('p')
            let weight = document.createElement('p')
            weight.textContent = `Weight: ${p.weight}`
            // pic.setAttribute('class', 'picDivs ')
            pic.classList.add('animated', 'bounceInRight', 'delay-4s', 'picDivs')

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

};

// fetchPokemon();
const newButton2 = document.querySelector('#newList')
newButton2.addEventListener('click', function () {
    const numberToShow = prompt('How many pokemon do you want to see? Keep it under 800')
    if (numberToShow > 0 && numberToShow <= 800) {
        fetchPokemon(numberToShow);
    } else {
        alert('Please choose a number between 1 and 800!!')
    }

})


