import { films } from '/assets/films.js';
import { people } from '/assets/people.js';
import { starships } from '/assets/starships.js';
console.log(starships);


console.log(films);

let mainArea = document.querySelector('.div-grid')


function addElement() {
    // create a new div element 
    var newDiv = document.createElement("div");
    // and give it some content 
    var newContent = document.createTextNode("Hi there and greetings!");
    // add the text node to the newly created div
    newDiv.appendChild(newContent);

    // add the newly created element and its content into the DOM 
    var currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
}
addElement('test add')

people.forEach((person) => {

    let personDiv = document.createElement('div');
    personDiv.classList.add('person-div');
    let name = document.createElement('h1');
    let gender = document.createElement('p');
    let pic = document.createElement('img');

    let charNum = getCharNumber(person.url);

    getCharNumber(person.url);

    name.textContent = person.name;
    gender.textContent = person.gender;
    pic.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`;


    if (person.gender === 'male') {


        personDiv.appendChild(name);
        personDiv.appendChild(gender);
        personDiv.appendChild(pic);
        mainArea.appendChild(personDiv);
    }

});
people.forEach((person) => {

    let personDiv = document.createElement('div');
    personDiv.classList.add('person-div');
    let name = document.createElement('h1');
    let gender = document.createElement('p');
    let pic = document.createElement('img');

    let charNum = getCharNumber(person.url);

    getCharNumber(person.url);

    name.textContent = person.name;
    gender.textContent = person.gender;
    pic.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`;


    if (person.gender === 'female') {


        personDiv.appendChild(name);
        personDiv.appendChild(gender);
        personDiv.appendChild(pic);
        mainArea.appendChild(personDiv);
    }

});

function getCharNumber(charURL) {
    let end = charURL.lastIndexOf('/')
    let charID = charURL.substring(end - 2, end)
    if (charID.indexOf('/') !== -1) {
        return charID.slice(1, 2)
    } else {
        return charID
    }
}
function getPerNumber(url) {
    let sliceStart = url.slice()
}


console.log(people);


