document.addEventListener('DOMContentLoaded', function () {
  let searchBtn = document.getElementById("search-btn");
  let countryInput = document.getElementById("country-input");

  searchBtn.addEventListener("click", () => {
    let countryName = countryInput.value.trim();
    if (countryName !== '') {
      let finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

      fetch(finalUrl)
        .then((response) => response.json())
        .then((data) => {
          console.log(data[0]);
          console.log(data[0].flags.svg);
          console.log(data[0].capital);
          console.log(data[0].continent);
          console.log(data[0].population);

          let result = document.getElementById('result');

          result.innerHTML = `
            <img src="${data[0].flags.svg}" class="flag-img">
            <h2>${data[0].name.common}</h2> 

            <div class="wrapper">
              <div class="data-wrapper">
                <h4>Capital:</h4>
                <span>${data[0].capital}</span> 
              </div>
            </div>

            <div class="wrapper">
              <div class="data-wrapper">
                <h4>Continent:</h4>
                <span>${data[0].continent}</span> 
              </div>
            </div>

            <div class="wrapper">
              <div class="data-wrapper">
                <h4>Population:</h4>
                <span>${data[0].population}</span> 
              </div>
            </div>
          `;
        })
        .catch((error) => {
          console.error('Error fetching country data:', error);
        });
    }
  });
});
