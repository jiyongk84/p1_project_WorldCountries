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
const button = document.querySelector('button');

button.style.backgroundColor = 'green';

button.addEventListener('mouseover', () => {
  button.style.backgroundColor = 'yellow';
});

button.addEventListener('mouseout', () => {
  button.style.backgroundColor = 'green';
});


const searchBox = document.querySelector('#inputBox')
const submitButton = document.querySelector('.submit')
const container = document.querySelector('#country-cards')
function getCountries() {
        const inputValue = searchBox.value.trim();

        if (inputValue === '') {
            alert('Please enter a search term.');
          return;
        }
        const container = document.querySelector('#country-cards');
        const inputField = document.querySelector('#inputBox');
            inputField.addEventListener('submit', (event) => {
                const inputValue = inputField.value.toLowerCase();
                const containerElements = container.querySelectorAll('li');
              
                containerElements.forEach(element => {
                  if (element.textContent.toLowerCase() === inputValue) {
                    event.preventDefault();
                    alert('Value already exists!');
                  }
            })
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
        let card = document.createElement('div')
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
         
        document.querySelector('.country-cards').appendChild(card)
    }

    function displayNoResult() {
        alert('No match found. Try again')
      }

    worldCountries()