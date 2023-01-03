//I added a comment
//I added another comment
// GLOBAL
const sunriseList = document.querySelector('#sunrise-list')
// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// FETCH FUNCTIONS
function getAllSunrises() {
    fetch('https://sunrisesunset.io/api/')
    .then(response => response.json())
    .then(console.log)
}

// RENDER FUNCTIONS
function addLikeBtn() {
    const btn = sunriseList.createElement('btn')
    btn.textContent = 'Like'
}