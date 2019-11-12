// marvel api key
// Your public key 052209b8d6c951c3a3199f1e3ee742b7
// Your private key e5b05a224cccbbe3cf3e8e3e246468e97b686fd6
// http://gateway.marvel.com/v1/public/comics?ts=1&apikey=052209b8d6c951c3a3199f1e3ee742b7&hash=ffd275c5130566a2916217b101f26150
// 1e5b05a224cccbbe3cf3e8e3e246468e97b686fd6052209b8d6c951c3a3199f1e3ee742b7
// http://gateway.marvel.com/v1/public/characters?ts=1&apikey=052209b8d6c951c3a3199f1e3ee742b7&hash=88fcf4a56e48ccd90cc09ec429bd5772
// http://gateway.marvel.com/v1/public/characters?ts=1&apikey=052209b8d6c951c3a3199f1e3ee742b7&hash=88fcf4a56e48ccd90cc09ec429bd5772
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
const theData = getAPIData('http://gateway.marvel.com/v1/public/characters?ts=1&apikey=43634ab5f5b50782274a50ec7e7d9811&hash=4761558e45170642234948dc70f24c20').then(data => {
    allSenators = data.data.results
    console.log(allSenators)
    console.log(allSenators[0].name)
    populateDom(allSenators)
})
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
        figureImage.src = `${senator.thumbnail.path}.jpg`
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
    img.src = `https://bulma.io/images/placeholders/96x96.png`
    img.alt = 'Placeholder image'
    let mediaContent = document.createElement('div')
    mediaContent.setAttribute('class', 'media-content')
    let titleP = document.createElement('p')
    titleP.setAttribute('class', 'title is-4')
    titleP.textContent = `${senator.name} ${senator.id}`
    let subTitleP = document.createElement('p')
    subTitleP.setAttribute('class', 'subtitle is-6')
    subTitleP.textContent = `${senator.state}`

    mediaContent.appendChild(titleP)
    mediaContent.appendChild(subTitleP)
    figure.appendChild(img)
    mediaLeft.appendChild(figure)
    media.appendChild(mediaLeft)
    media.appendChild(mediaContent)
    cardContent.appendChild(media)
    return cardContent

}