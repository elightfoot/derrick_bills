/*async function getPokemonData(url){
    const response = await fetch(url)
    return await response.json()
}*/

async function getAPIData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {}
}
// random number to initially populate left side with random pokemon.
const theData = getAPIData(
  `https://pokeapi.co/api/v2/pokemon/?limit=28&offset=${random()}`
).then(data => {
  for (const pokemon of data.results) {
    getAPIData(pokemon.url).then(pokedata => {
      populateDom(pokedata);
    });
  }
});
//! FOR LEFT AND RIGHT SEPERATION FOR DIFFERENT API METHODS
let mainArea = document.querySelector(".left");

function populateDom(single_pokemon) {
  let pokeCard = document.createElement("div");
  let pokeScene = document.createElement("div");
  let pokeFront = document.createElement("div");
  let pokeBack = document.createElement("div");

  fillCardFront(pokeFront, single_pokemon);
  fillCardBack(pokeBack, single_pokemon);

  pokeScene.setAttribute("class", "scene");
  pokeCard.setAttribute("class", "card");
  pokeCard.appendChild(pokeFront);
  pokeCard.appendChild(pokeBack);
  pokeScene.appendChild(pokeCard);

  mainArea.appendChild(pokeScene);

  pokeCard.addEventListener("click", function() {
    pokeCard.classList.toggle("is-flipped");
  });
}
function fillCardBack(pokeBack, data) {
  // define divs in fillCardBack
  let pokeOrder = document.createElement("p");
  let pokeHP = document.createElement("p");
  let pic = document.createElement("img");
  let pokeNum = getPokeNumber(data.id);

  // set attributes and textContent
  pokeOrder.textContent = `Poke Number: ${data.order}`;
  pokeHP.textContent = `Base Hit Points: ${data.stats[0].base_stat}`;
  pokeBack.setAttribute("class", "card__face card__face--back");
  pic.setAttribute("class", "picDivs");
  pic.src = `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${pokeNum}.png`;
  // appendChildren
  pokeBack.appendChild(pic);
  pokeBack.appendChild(pokeHP);
  pokeBack.appendChild(pokeOrder);
}
function fillCardFront(pokeFront, data) {
  let name = document.createElement("h3");
  let pic = document.createElement("img");
  let type = document.createElement("p");
  let pokeNum = getPokeNumber(data.id);

  // pic.setAttribute('class', 'picDivs')
  //!animate css classes added here to have pictures fly in to view
  pokeFront.setAttribute("class", "card__face card__face--front");
  pic.classList.add("animated", "bounceInRight", "delay-4s", "picDivs");
  name.textContent = capitalize_Words(`${data.name}`);
  type.textContent = `Type: ${data.types[0].type.name}`;
  pic.src = `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${pokeNum}.png`;

  pokeFront.appendChild(type);
  pokeFront.appendChild(pic);
  pokeFront.appendChild(name);
}

function capitalize_Words(str) {
  return str.replace(/\w\S*/g, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

// console.log(capitalize_Words('js string exercises'));

function getPokeNumber(id) {
  if (id < 10) return `00${id}`;
  if (id > 9 && id < 100) {
    return `0${id}`;
  } else return id;
}

// *******************************************************************ALTERNATE POKEMON API FETCHING

const fetchPokemon = num => {
  const promises = [];
  const numberToShow = Number(num);

  //creates a random number
  const random = Math.round(Math.random() * 770);
  console.log(random);

  for (let i = random; i <= random + numberToShow - 1; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then(res => res.json()));
  }
  //*alternate method for pulling data out of api I wanted working copies of both methods for reference.
  Promise.all(promises).then(results => {
    console.log(results);
    // *map the results to pull out data being used
    const pokemon = results.map(result => ({
      //select MAP values for data to add to display card
      name: result.name,
      //!no longer using sprites for images. image: result.sprites['front_default'],
      //! no longer using sprites. imageBack: result.sprites['back_default'],
      type: result.types.map(type => type.type.name).join(", "),
      id: result.id,
      weight: result.weight,
      hp: result.stats[0].base_stat,
      ability: result.abilities[0].ability.name
    }));

    displayPokemon(pokemon);
  });
};

const rightArea = document.querySelector(".right");
// *********************************************************************************
//! I HAVE 2 METHODS OF "API & POPULATEDOM" REQUESTS. THEY PULL DIFFERENT INFO FROM the api with two different api techniques
// only one is needed but I wanted to have both in
const displayPokemon = pokemon => {
  console.log(pokemon);
  //spread operator takes the pokemon data and turns it in to an array of objects
  //that contains the properties and values picked in the const pokemon map.
  let pokeArray = [...pokemon];
  console.log(pokeArray);
  pokeArray.forEach(function(p) {
    // console.log(p)
    let pokeCard = document.createElement("div");
    let pokeScene = document.createElement("div");
    let pokeFront = document.createElement("div");
    let pokeBack = document.createElement("div");

    fillFront(pokeFront, p);
    fillBack(pokeBack, p);

    pokeScene.setAttribute("class", "scene");
    pokeCard.setAttribute("class", "card");
    pokeCard.appendChild(pokeFront);
    pokeCard.appendChild(pokeBack);
    pokeScene.appendChild(pokeCard);
    rightArea.appendChild(pokeScene);

    pokeCard.addEventListener("click", function() {
      pokeCard.classList.toggle("is-flipped");
    });
    function fillBack(pokeBack, p) {
      pokeBack.setAttribute("class", "card__face card__face--back");
      let pokeOrder = document.createElement("p");
      let pokeHP = document.createElement("p");

      pokeOrder.textContent = `Poke Number: ${p.id}`;
      pokeHP.textContent = `Base Hit Points: ${p.hp}`;
      pokeBack.appendChild(pokeOrder);
      pokeBack.appendChild(pokeHP);
      // let pokeNum = getPokeNumber(p.id);

      let pic = document.createElement("img");
      pic.setAttribute("class", "picDivs");

      pic.classList.add("bounce");

      pic.src = `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${p.id}.png`;
      pokeBack.appendChild(pic);
    }

    function fillFront(pokeFront, p) {
      pokeFront.setAttribute("class", "card__face card__face--front");
      let name = document.createElement("h3");
      let pic = document.createElement("img");
      let type = document.createElement("p");
      let weight = document.createElement("p");
      weight.textContent = `Weight: ${p.weight}`;
      pic.classList.add("animated", "bounceInRight", "delay-4s", "picDivs");

      // let pokeNum = getPokeNumber(p.id);
      name.textContent = capitalize_Words(`${p.name}`);
      type.textContent = `Type: ${p.type}`;
      pic.src = `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${p.id}.png`;
      pic.addEventListener("error", event => {
        let noImage = event.target;
        //!some images are missing this handles the error if it is.
        noImage.src = "images/pokelogo.png";
      });
      pokeFront.appendChild(name);
      pokeFront.appendChild(type);
      pokeFront.appendChild(pic);
      pokeFront.appendChild(weight);
    }
  });
};
// ********************************************************************************
// *CUSTOM CLASS SOLUTION NOT IDEAL, DUPLICATES ALL THE POPULATE DOM FUNCTIONS

function populateDom2(single_pokemon) {
  let pokeCard = document.createElement("div");
  let pokeScene = document.createElement("div");
  let pokeFront = document.createElement("div");
  let pokeBack = document.createElement("div");

  fillCardFront2(pokeFront, single_pokemon);
  fillCardBack2(pokeBack, single_pokemon);

  pokeScene.setAttribute("class", "scene");
  pokeCard.setAttribute("class", "card");
  pokeCard.appendChild(pokeFront);
  pokeCard.appendChild(pokeBack);
  pokeScene.appendChild(pokeCard);

  mainArea.appendChild(pokeScene);

  pokeCard.addEventListener("click", function() {
    pokeCard.classList.toggle("is-flipped");
  });
}
// not a good way to use the add card by class button, but this way had no affect on
// the original cards. TODO: FIND A BETTER SOLUTION
class Pokemon {
  constructor(id, name, pokeNum, type) {
    this.id = id;
    this.name = name;
    this.pokeNum = Number(pokeNum);
    this.type = type;
  }
}

function random() {
  return Math.round(Math.random() * 750);
}
const CreatedPoke = new Pokemon(random(), "Class Pokemon", 713);
const newButton3 = document.querySelector("#newPokemon2");
newButton3.addEventListener("click", function() {
  random();
  populateDom2(CreatedPoke);
});

function fillCardBack2(pokeBack, data) {
  pokeBack.setAttribute("class", "card__face card__face--back");
  let pokeOrder = document.createElement("p");
  let pokeHP = document.createElement("p");
  pokeBack.appendChild(pokeOrder);
  pokeBack.appendChild(pokeHP);
  let pokeNum = getPokeNumber(data.id);

  let pic = document.createElement("img");
  pic.setAttribute("class", "picDivs");
  pic.classList.add("animated", "wobble", "delay-4s", "picDivs");
  pic.src = `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${data.id}.png`;
  pokeBack.appendChild(pic);
}
function fillCardFront2(pokeFront, data) {
  pokeFront.setAttribute("class", "card__face card__face--front");
  let name = document.createElement("h3");
  let pic = document.createElement("img");
  let type = document.createElement("p");
  pic.classList.add("animated", "bounceInRight", "delay-4s", "picDivs");
  let pokeNum = getPokeNumber(data.id);
  name.textContent = capitalize_Words(`${data.name}`);
  pic.src = `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${data.id}.png`;
  pokeFront.appendChild(name);
  pokeFront.appendChild(type);
  pokeFront.appendChild(pic);
}

// Modal Scripting modified W3 Schools modal for the pokemon project.
const inputFormValue = document.querySelector("#value");
const inputFormSubmit = document.querySelector("#submit");
const inputFormValue2 = document.querySelector("#value2");
const inputFormSubmit2 = document.querySelector("#submit2");
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btnRight = document.getElementById("newList");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// *****************************************************
// get the values from the input and run the render functions
inputFormSubmit.onclick = function() {
  console.log(value.value);
  const numberToShow = value.value;
  let modalFooter = document.querySelector("#footer");

  if (numberToShow > 0 && numberToShow <= 800) {
    fetchPokemon(numberToShow);
    modal.style.display = "none";
  } else {
    modalFooter.textContent = "PLEASE CHOOSE A NUMBER BETWEEN 0 AND 807";
  }
};
// get the values for the 2nd input and button and render the functions
inputFormSubmit2.onclick = function() {
  console.log(value2.value);
  let pokeId = value2.value;
  let modalFooter = document.querySelector("#footer");
  if (pokeId > 0 && pokeId <= 807) {
    getAPIData(`https://pokeapi.co/api/v2/pokemon/${pokeId}`).then(result => {
      populateDom(result);
    });
    modal.style.display = "none";
  } else {
    modalFooter.textContent = "PLEASE CHOOSE A NUMBER BETWEEN 0 AND 807";
  }
  // modal.style.display = "none";
};

btnRight.onclick = function() {
  modal.style.display = "block";
};
// !two options to close the modal withuot submitting a choice
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
