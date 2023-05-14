function worldCountries() {
    document.addEventListener('DOMContentLoaded', () => {
        let form = document.querySelector('form')
        form.addEventListener('submit', (event) => {
            event.preventDefault()
            getCountries(event.target.inputBox)
            form.reset()
        })
    })
}    

const searchBox = document.querySelector('#inputBox')
const submitButton = document.querySelector('.submit')
const container = document.querySelector('#country-cards')
function getCountries() {
        const inputValue = searchBox.value.trim();

        if (inputValue === '') {
            alert('Please enter a search term.');
          return;
        }
    
        searchBox.addEventListener('blur', (event) => {
            const inputValue = searchBox.value.toLowerCase();
            const existingElement = container.querySelector('#country-list').contains(`${inputValue})`);
          
            if (existingElement) {
              event.preventDefault();
              alert('Duplicate value found!');
            }
        })
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
            <p> Currency: ${Object.keys(country.currencies)} </p>
            <img src="${country.flags.png}">
            </div> `
         
        document.querySelector('#country-list').appendChild(card)
    }

    function displayNoResult() {
        alert('No match found. Try again')
      }

    worldCountries()