document.querySelector('button').addEventListener('click', () =>
    console.log('Form submitted'))

fetch('https://restcountries.com/v3.1/all')
    .then((resp) => resp.json())
    .then((json) => console.log(json))
