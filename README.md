# FINAL PROJECT
I thouroghly enjoyed this class and learned a lot!!
- fixes from class:
- starwars reload removed. (no glitches in reload)
- array mutation solved with spread operator to copy to new array then run changes on that copied array.
- styling changes to star wars
- fixed png file for democrates(removed background in photoshop)
- small style changes to portfolio site
  
  

Link to portfolio: [Portfolio Website Link](https://derrickbills.com).
(3) projects to meet the requirements.
# POKEMON:
1. Header that summarizes what the page is about
2. Grid full of at least 25 images that look somewhat like baseball or playing cards 
3. Interactive cards individually flip with an animation of your choice to show stats
    # SKILLS DEMONSTRATED WITH THIS PAGE:
        1. CLICK EVENT HANDLING TO MAKE THE CARD INTERACTIVE.
        2. BASIC ANIMATIONS.
        3. FLEXBOX/GRID SKILLS TO LAYOUT CARDS.
        4. NEW CUSTOM JAVASCRIPT OBJECT CREATION.
        5. ABILITY TO FILTER, MAP, AND REDUCE ARRAYS OF OBJECTS.
            -MAP TOTAL ARRAY.
    
# SENATOR DATA ASSIGNMENT:
1. Header that summarizes what the page is about
2. Grid full of at least 25 images that look somewhat like baseball or playing cards 
    # SKILLS DEMONSTRATED WITH THIS PAGE:
        1. ABILITY TO FILTER, MAP, AND REDUCE ARRAYS OF OBJECTS.
            -MAP TOTAL ARRAY.
            -FILTER BY HOME STATE & FILTER BY PARTY AFFILIATION.
            -REDUCE TOTAL VOTES CASTED (SHOWN FOR EACH FILTER OF DISPLAYED SENATE MEMBERS).
        3. FLEXBOX/GRID SKILLS TO LAYOUT CARDS.
        4. CREATED A DROP DOWN SELECT LIST TO ORGANIZE THE DISPLAY OF DIFFERENT SENATOR LISTS.
```javascript
function totalVotes(senatorList) {
  const results = senatorList.reduce((acc, senator) => {
    return acc + senator.total_votes;
  }, 0);
  return results;
}
function totalVotesMissed(senatorList) {
  let len = senatorList.length;
  console.log(len);
  const results = senatorList.reduce((acc, senator) => {
    return acc + senator.missed_votes_pct;
  }, 0);
  return (results / len).toFixed(2);
}
```

# FINAL REQUREMENTS COMBINATION OF ALL 4 PROJECTS (POKEMON/SENATORS/STARWARS/PORFOLIO SITE)
- :heavy_check_mark: Deployable by simple Git push from your local Git repository to your Github repo to your public URL 
- :heavy_check_mark: Provides examples of Basic JavaScript code including
- :heavy_check_mark: Has a good UI that utilizes proper, basic HTML, CSS and Flexbox
- :heavy_check_mark: Proper use of variables with proper scope
- :heavy_check_mark: Good use of conditional logic and value comparison
- :heavy_check_mark: Proper use of String manipulation
- :heavy_check_mark: Good use of Arrays 
```javascript
if (`${event.target.value}` === "All Sen By Age") {
    let sortThis = [...simpleSenators]; //copy simple senators using the spread operator. to not mutate orginal array going to all senators list
    populateDom(sortSenatorsByAge(sortThis));
    result2.textContent = `Total Senate Votes: ${totalVotes(sortThis)}`;
  }
  ```
- :heavy_check_mark: Use of custom JavaScript objects
- :heavy_check_mark: Demonstrates use of ES6 including
```javascript
function totalVotes(senatorList) {
  const results = senatorList.reduce((acc, senator) => {
    return acc + senator.total_votes;
  }, 0);
  return results;
}
function totalVotesMissed(senatorList) {
  let len = senatorList.length;
  console.log(len);
  const results = senatorList.reduce((acc, senator) => {
    return acc + senator.missed_votes_pct;
  }, 0);
  return (results / len).toFixed(2);
}
```
- :heavy_check_mark: Proper use of let and const variables 
- :heavy_check_mark: Use of Arrow functions
```javascript
function filterSenators(simpleList, partyAffiliation) {
  return simpleList.filter(senator => senator.party === partyAffiliation);
  // console.log(party)
}
function findUtah(allSenators, state) {
  return allSenators.filter(senator => senator.state === state);
}
```
- :heavy_check_mark: Use of Strings using Template Literals
```javascript
const populationComma = Number(planet.population).toLocaleString();
    population.textContent = `Population: ${populationComma}`;
    if (planet.population === "unknown") {
      population.textContent = `Unknown`;
    } else if (planet.population) {
      population.textContent = `Population: ${populationComma}`;
    }
```
- :heavy_check_mark: Proper declarations of Objects
- :heavy_check_mark: Use of Import and Export statements
```javascript
import { starships } from "../assets/starships.js";
import { people } from "../assets/people.js";
import { planets } from "../assets/planets.js";

```
- :heavy_check_mark: Demonstrates use of Basic Data Structures including
- :heavy_check_mark: Using Arrays to store and manipulate collections of data
```javascript
const planetList = planets.slice(1, 15);
const shipList = starships.slice(1, 15);
```
- :heavy_check_mark: Use of Objects with key-value pairs
```javascript
class Pokemon {
  constructor(id, name, pokeNum, type) {
    this.id = id;
    this.name = name;
    this.pokeNum = Number(pokeNum);
    this.type = type;
  }
}
```
- :heavy_check_mark: Iteration through an Array using loops and Array methods
- :heavy_check_mark: Demonstrates us of Object Oriented Programming techniques including:
- :heavy_check_mark: Objects with properties and methods accessed using dot notation
- :heavy_check_mark: Objects using Constructors properly
- :heavy_check_mark: Website is visually pleasing and easy to navigate and serves as a good example of learner's capability
- :heavy_check_mark: Website runs without errors
- :heavy_check_mark: Source code is well documented to describe where the features listed above are on display
- :heavy_check_mark: Website is clearly your own work and creatively demonstrates your web development skills
- :heavy_check_mark: Commit to your GitHub repo at least 4 days a week with at least one commit each day for the remainder of     the semester (October 10th - December 5th)
- :heavy_check_mark: Be sure to submit both your GitHub URL and your Netlify URL!
