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
    card.innerHTML = `
        <div class="country">
            <h3>${country.name.common}</h3>
        <p> Capital City: ${country.capital} </p>
        <img src="${country.flags.png}">
        </div> `
     
    document.querySelector('#country-list').appendChild(card)
}

function getCountries() {
    fetch('https://restcountries.com/v3.1/all')
    .then((resp) => resp.json())
    .then((countryData) => countryData.forEach(country => listOneCountry(country)))
}

worldCountries()