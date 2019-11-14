async function getAPIData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}
let allSenators = []
let simpleSenators = []
let republicans = []
let democrats = []
const theData = getAPIData('senators.json').then(data => {
    allSenators = data.results[0].members
    simpleSenators = senatorMap(allSenators)
    republicans = filterSenators(simpleSenators, "R")
    democrats = filterSenators(simpleSenators, "D")

    console.log(totalVotes(simpleSenators))
    // console.log(democrats)
    populateDom(simpleSenators)
    // console.log(allSenators)
})
//-------------------------------------------------------FILTER SENATORS.JSON. put in .then method when ready to implement
function filterSenators(simpleList, partyAffiliation) {
    return simpleList.filter(senator => senator.party === partyAffiliation)
}

//-------------------------------------------------------MAP SENATORS.JSON
function senatorMap(allOfThem) {
    let results = allOfThem.map(senator => {
        return {
            id: senator.id,
            name: `${senator.first_name} ${senator.last_name}`,
            party: senator.party,
            age: `${calculate_age(new Date(senator.date_of_birth))}`,
            state: senator.state,
            office: senator.office,
            phone: senator.phone,
            gender: senator.gender,
            total_votes: senator.total_votes,
            twitter: senator.twitter_account
        }
    })
    return results
}
//-------------------------------------------------------REDUCE SENATORS.JSON
const testArray = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
const testReduce = testArray.reduce((accumlator, currentValue) => {
    return accumlator + currentValue
}, 0)
console.log(testReduce)

function totalVotes(senatorList) {
    const results = senatorList.reduce((acc, senator) => {
        return acc + senator.total_votes
    }, 0)
    return results
}

const container = document.querySelector('.container')

function populateDom(senator_array) {
    senator_array.forEach(senator => {
        let card = document.createElement('div')
        card.setAttribute('class', 'card')
        let cardImage = document.createElement('div')
        cardImage.setAttribute('class', 'card-image')
        let figure = document.createElement('figure')
        figure.setAttribute('class', 'image ')
        let figureImage = document.createElement('img')
        figureImage.src = `https://www.congress.gov/img/member/${senator.id.toLowerCase()}_200.jpg`
        figureImage.alt = 'Placeholder image'


        figure.appendChild(figureImage)
        cardImage.appendChild(figure)
        card.appendChild(cardImage)
        //added this after creating the cardContent function
        card.appendChild(cardContent(senator))
        container.appendChild(card)
    })
}
function cardContent(senator) {
    let cardContent = document.createElement('div')
    cardContent.setAttribute('class', 'card-content')
    let media = document.createElement('div')
    media.setAttribute('class', 'media')
    let mediaLeft = document.createElement('div')
    mediaLeft.setAttribute('class', 'media-left')
    let figure = document.createElement('figure')
    figure.setAttribute('class', 'image is-48x48')
    let img = document.createElement('img')
    img.src = `/images/independent.png`
    img.alt = 'Placeholder image'
    if (senator.party === "R") {
        img.src = `/images/republican.png`
    }
    else if (senator.party === "D") {
        img.src = `/images/Democrat.png`
    }

    let mediaContent = document.createElement('div')
    mediaContent.setAttribute('class', 'media-content')
    let titleP = document.createElement('p')
    titleP.setAttribute('class', 'title is-6')
    titleP.textContent = `${senator.name}`
    let subTitleP = document.createElement('p')
    subTitleP.setAttribute('class', 'subtitle is-6')
    subTitleP.textContent = `Home state: ${senator.state}`
    let tweet = document.createElement('a')
    tweet.src = `/images/independent.png`
    let link = document.createTextNode("View Twitter")
    // tweet.textContent = tweet.link(`http://twitter.com${senator.twitter}`)

    let contentDiv = document.createElement('div')
    contentDiv.setAttribute('class', 'content')
    contentDiv.textContent = `Office: ${senator.office}. Phone: ${senator.phone}`
    let contentBreak = document.createElement('br')
    let ageP = document.createElement('p')
    ageP.textContent = `Age: ${senator.age}`

    mediaContent.appendChild(titleP)
    mediaContent.appendChild(subTitleP)
    mediaContent.appendChild(tweet)
    tweet.appendChild(link)
    tweet.title = 'this is a link'
    tweet.href = `http://twitter.com/${senator.twitter}`
    figure.appendChild(img)
    mediaLeft.appendChild(figure)
    media.appendChild(mediaLeft)
    media.appendChild(mediaContent)

    contentDiv.appendChild(contentBreak)
    contentDiv.appendChild(ageP)
    cardContent.appendChild(media)
    cardContent.appendChild(contentDiv)

    return cardContent
}
function calculate_age(dob) {
    let diff_ms = Date.now() - dob.getTime();
    let age_dt = new Date(diff_ms);
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}