const form = document.getElementById('search-form');
const input = document.getElementById('country-input');
const resultContainer = document.getElementById('result');
const flagImg = document.getElementById('flag');
const countryName = document.getElementById('country-name');
const capital = document.getElementById('capital');
const population = document.getElementById('population');
const currency = document.getElementById('currency');
const languages = document.getElementById('languages');

const container = document.getElementById('container')

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (input.value != '') {
    searchCountry(input.value.trim());
  }
});

const searchCountry = (namaNegara) => {
  fetch(`https://restcountries.com/v3.1/name/${namaNegara}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      
      const negara = data[0];

      flagImg.src = negara.flags.svg;
      countryName.innerText = negara.name.common;
      capital.innerText = negara.capital[0];
      population.innerText = negara.population.toLocaleString();
      currency.innerText = Object.values(negara.currencies)[0].name;
      languages.innerText = Object.values(negara.languages).join(', ');

      resultContainer.classList.remove('hidden');
    })
    .catch(error => {
      console.error('Terjadi kesalahan:', error);
      container.classList.add('eror')
            setTimeout(() => {
                main.classList.remove('eror')
            }, 1000)
    });
}
