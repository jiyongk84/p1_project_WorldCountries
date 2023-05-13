function worldCountries() {
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelector('form').addEventListener('submit', (event) => {
            event.preventDefault()
        getCountries(event.target.inputBox)
        })
    })
}    

function listOneCountry(country) {
    let card = document.createElement('li')
    card.className = 'card'
    card.innerHTML = Object.values(country.name)
    document.querySelector('#country-list').appendChild(card)
}

function getCountries() {
    fetch('https://restcountries.com/v3.1/all')
    .then((resp) => resp.json())
    .then((countryData) => countryData.forEach(country => listOneCountry(country)))
}

worldCountries()