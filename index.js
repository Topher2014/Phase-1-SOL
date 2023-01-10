// GLOBAL
const baseUrl = "https://api.sunrisesunset.io/json?"
const endUrl = "&date=today"
const sunriseList = document.querySelector('#sunrise-list')
const parksUrl = 'http://localhost:3000/parks'
const yosemiteURL= 'https://api.sunrisesunset.io/json?lat=37.84835&lng=-119.55696&timezone=PST'
const url = 'https://api.sunrisesunset.io/json?lat=38.907192&lng=-77.036873&timezone=UTC&date=1990-05-22'

// FETCH FUNCTIONS
function getAllSunrises(lat, lng, tmz) {
    return fetch(baseUrl + `lat=${lat}&lng=${lng}&timezone=${tmz}` + endUrl)
        .then(response => response.json())
        // .then(renderNationalParks)
}

function getLocationData(url) {
    return fetch('url')
    .then(response => response.json())

}

function getNationalParks(url) {
    return fetch(url)
        .then(response => response.json())
}

fetch(url)
    .then(response => response.json())
    .then(object => {
            console.log('1: ', object)
            renderParks(object)
        })

// function renderParks(object){
//     const li = document.createElement('li')
//     li.className = "list-li"
//     const image = document.createElement('img')
//     image.src = object.image
//     const nationalPark = document.createElement('h3')
//     nationalPark.textContent = parksObj.nationalPark
//     const location = document.createElement('h4')
//     location.textContent = parksObj.location
//     like.textContent = "Like"
//     sunriseList.append(li)
//     li.append(image, nationalPark, location, sunrise, sunset, goldenHour, dayLength, like)
// }


// RENDER FUNCTIONS
function renderNationalParks(parksObj) {
    const li = document.createElement('li')
    li.className = "list-li"
    const image = document.createElement('img')
    image.src = parksObj.image
    const nationalPark = document.createElement('h3')
    nationalPark.textContent = parksObj.nationalPark
    const location = document.createElement('h4')
    location.textContent = parksObj.location
    const sunrise = document.createElement('p')
    sunrise.textContent = parksObj.sunrise
    sunrise.setAttribute('id', 'para-1')
    const sunriseTime = document.getElementById('#para-1')
    const sunset = document.createElement('p')
    sunset.textContent = parksObj.sunset
    const goldenHour = document.createElement('p')
    goldenHour.textContent = parksObj["golden-hour"]
    const dayLength = document.createElement('p')
    dayLength.textContent = parksObj["day-length"]
    const like = document.createElement('button')
    like.textContent = "Like"
    sunriseList.append(li)
    li.append(image, nationalPark, location, sunrise, sunset, goldenHour, dayLength, like)
}

function iterateParks(parksArray) {
    parksArray.forEach(renderNationalParks)
}

// INITIALIZERS
getNationalParks(parksUrl).then(parksArray => {iterateParks(parksArray)})
// getAllSunrises(37.865101, -119.538330, "PST").then(console.log)

//DOM selecotrs
let formSubmition = document.querySelector('#book-form');
let formTitle = document.querySelector('#form-title');
let formLocation = document.querySelector('#form-location');
let formImage = document.querySelector('#form-imageUrl');
let formBtn = document.querySelector('#submit-form');

formSubmition.addEventListener('submit', (e)=> {
    e.preventDefault()
    console.log('text')
    const title = e.target['form-title'].value
    const cityState = e.target['form-location'].value
    const image = e.target['form-imageUrl'].value
    let newForm = {
        title,
        cityState,
        image
    }
    

    fetch('http://localhost:3000/parks', {
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
            "Accept" : "application/json",
        },
        body : JSON.stringify(newForm)
    .then(re => re.json())
    .then(renderNationalParks)
     } )
})