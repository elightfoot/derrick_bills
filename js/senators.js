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
const theData = getAPIData('senators.json').then(data => {
    allSenators = (data.results[0].members)
    console.log('hi there')
})
console.log(allSenators)

// let mainArea = document.querySelector('main')
// let mainButton = document.createElement('button')
// mainButton.textContent = 'Button'
// mainArea.appendChild(mainButton)
// mainButton.addEventListener('click', function () {
//     console.log(allSenators)

// })
