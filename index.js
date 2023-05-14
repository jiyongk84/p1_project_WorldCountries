function worldCountries() {
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelector('form').addEventListener('submit', (event) => {
            event.preventDefault()
        getCountries(event.target.inputBox)
        })
    })
}    

const searchBox = document.querySelector('#inputBox')
const submitButton = document.querySelector('.submit')
//const resultDiv = document.querySelector('#country-cards');

function getCountries() {
        const inputValue = searchBox.value.trim();
      
        if (inputValue === '') {
          resultDiv.textContent = 'Please enter a search term.';
          return;
        }
    fetch('https://restcountries.com/v3.1/all')
    .then((resp) => resp.json())
    .then(countryData => {
            const matchingData = countryData.map(item => item.name.common.toLowerCase() === inputValue.toLowerCase() ? item : null).filter(Boolean);
            if (matchingData.length > 0) {
              console.log('Match found for ' + inputValue);
              listOneCountry(matchingData.shift());
            } else {
              console.log('No match found for ' + inputValue);
              displayNoResult();
            }
          })
          //.catch(error => console.error('Error fetching data: ' + error));
        
      }//);
      function listOneCountry(country) {
        let card = document.createElement('li')
        card.className = 'card'
        card.innerHTML = `
            <div class="country">
                <h3>${country.name.common}</h3>
            <p> Capital City: ${country.capital} </p>
            <p> Official Language(s): ${Object.values(country.languages)}</p>
            <p> Continent: ${country.region} </p>
            <img src="${country.flags.png}">
            </div> `
         
        document.querySelector('#country-list').appendChild(card)
    }

    function displayNoResult() {
        alert('No match found. Try again')
      }

    worldCountries()