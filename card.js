// async function getPokemonData(url) {
//     const response = await fetch(url);
//     return await response.json();

// }

async function getPokemonData(url) {


    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)

    }
    catch (error) { console.log(error) }

    // card flip javascript.
    var card = document.querySelector('.card');
    card.addEventListener('click', function () {
        card.classList.toggle('is-flipped');
    });

}

const data = getPokemonData('https://pokeapi.co/api/v2/pokemon');
console.log(data)
