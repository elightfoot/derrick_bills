import { films } from '/assets/films.js';
import { people } from '/assets/people.js';
import { starships } from '/assets/starships.js';
// console.log(starships);



console.log(people)
class Character {
    constructor(name, height, url, gender) {
        this.name = name;
        this.height = height;
        this.url = url;
        this.gender = gender;
    }
    write() {
        let mainArea = document.querySelector('.div-grid')
        let personDiv = document.createElement('div');
        personDiv.classList.add('person-div');
        let name = document.createElement('h1');
        let gender = document.createElement('p');
        let pic = document.createElement('img');

        let charNum = getCharNumber(this.url);

        getCharNumber(this.url);

        name.textContent = this.name;
        gender.textContent = this.gender;
        pic.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`;


        personDiv.appendChild(name, gender, pic);
        personDiv.appendChild(gender);
        personDiv.appendChild(pic);
        mainArea.appendChild(personDiv);

        function getCharNumber(charURL) {
            let end = charURL.lastIndexOf('/')
            let charID = charURL.substring(end - 2, end)
            if (charID.indexOf('/') !== -1) {
                return charID.slice(1, 2)
            } else {
                return charID
            }
        }


    }

}
let characterOne = new Character(people[0].name, people[0].height, people[0].url, people[0].gender);
let characterTwo = new Character(people[3].name, people[3].height, people[3].url);
let characterThree = new Character(people[10].name, people[10].height, people[10].url);
let characterFour = new Character(people[9].name, people[9].height, people[9].url);
let characterFive = new Character(people[18].name, people[18].height, people[18].url);
let characterSix = new Character(people[19].name, people[19].height, people[19].url);
let characterSeven = new Character(people[41].name, people[41].height, people[41].url);
let characterEight = new Character(people[30].name, people[30].height, people[30].url);
let characterNine = new Character(people[63].name, people[63].height, people[63].url);
let characterTen = new Character(people[76].name, people[76].height, people[76].url);

characterOne.write();
characterTwo.write();
characterThree.write();
characterFour.write();
characterFive.write();
characterSix.write();
characterSeven.write();
characterEight.write();
characterNine.write();
characterTen.write();



class Character2 {
    constructor(name, height, url) {
        this.name = name;
        this.height = height;
        this.url = url;
    }
    write() {
        let mainArea2 = document.querySelector('.div-grid2')
        let personDiv = document.createElement('div');
        personDiv.classList.add('person-div');
        let name = document.createElement('h1');
        let height = document.createElement('p');
        let pic = document.createElement('img');
        // console.log(mainArea2);

        let charNum = getCharNumber(this.url);

        getCharNumber(this.url);

        name.textContent = this.name;
        // gender.textContent = person.gender;
        pic.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`;


        personDiv.appendChild(name);
        personDiv.appendChild(height);
        personDiv.appendChild(pic);
        mainArea2.appendChild(personDiv);


        function getCharNumber(charURL) {
            let end = charURL.lastIndexOf('/')
            let charID = charURL.substring(end - 2, end)
            if (charID.indexOf('/') !== -1) {
                return charID.slice(1, 2)
            } else {
                return charID
            }
        }



    }

}
let droid1 = new Character2(people[1].name, people[1].height, people[1].url);
let droid2 = new Character2(people[2].name, people[2].height, people[2].url);
let droid3 = new Character2(people[21].name, people[21].height, people[21].url);
let droid4 = new Character2(people[84].name, people[84].height, people[84].url);

droid1.write();
droid2.write();
droid3.write();
droid4.write();




//the 'new' keyword
//-reates a new empty object{}
// sets the value of 'this' to be the new empty object
// calls the constructor method

// ****************************************************************************


// let mainArea = document.querySelector('.div-grid')



// addElement('test add')
// let smallerList = people.slice(0, 10)
// console.log(smallerList);


// people.forEach((person) => {

//     let personDiv = document.createElement('div');
//     personDiv.classList.add('person-div');
//     let name = document.createElement('h1');
//     let gender = document.createElement('p');
//     let pic = document.createElement('img');

//     let charNum = getCharNumber(person.url);

//     getCharNumber(person.url);

//     name.textContent = person.name;
//     gender.textContent = person.gender;
//     pic.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`;


//     // if (person.gender === 'male') {


//     personDiv.appendChild(name);
//     personDiv.appendChild(gender);
//     personDiv.appendChild(pic);
//     mainArea.appendChild(personDiv);
//     // }

// });
// people.forEach((person) => {

//     let personDiv = document.createElement('div');
//     personDiv.classList.add('person-div');
//     let name = document.createElement('h1');
//     let gender = document.createElement('p');
//     let pic = document.createElement('img');

//     let charNum = getCharNumber(person.url);

//     getCharNumber(person.url);

//     name.textContent = person.name;
//     gender.textContent = person.gender;
//     pic.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`;


//     if (person.gender === 'female') {


//         personDiv.appendChild(name);
//         personDiv.appendChild(gender);
//         personDiv.appendChild(pic);
//         mainArea.appendChild(personDiv);
//     }

// });

// function getCharNumber(charURL) {
//     let end = charURL.lastIndexOf('/')
//     let charID = charURL.substring(end - 2, end)
//     if (charID.indexOf('/') !== -1) {
//         return charID.slice(1, 2)
//     } else {
//         return charID
//     }
// }



// console.log(people);

// let peopleMap = people.map((thing) => {
//     return (thing.gender);
// })
// console.log(peopleMap)
// console.log(people.length)
// console.log(eyeColor);

