// GLOBAL
const baseUrl = "https://api.sunrisesunset.io/json?"
const endUrl = "&date=today"
const sunriseList = document.querySelector('#sunrise-list')


// FETCH FUNCTIONS
function getAllSunrises(lat, lng, tmz) {
    return fetch(baseUrl + `lat=${lat}&lng=${lng}&timezone=${tmz}` + endUrl)
        .then(response => response.json())
        .then(console.log)
}

https://api.sunrisesunset.io/json?lat=38.907192&lng=-77.036873&timezone=UTC&date=today

// RENDER FUNCTIONS
function addLikeBtn() {
    const btn = sunriseList.createElement('btn')
    btn.textContent = 'Like'
}
