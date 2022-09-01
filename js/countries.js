const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data));
}

const displayCountries = countries => {

    const countriesContainer = document.getElementById('countries-container');
    countries.forEach(country => {
        // console.log(country);
        const countryDiv  = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        <h3>Name: ${country.name.common}</h3>
        <h4>Capital: ${country.capital ? country.capital[0] : 'No Capital'}</h4>
        <button onclick="loadCountryFlag('${country.cca2}')">Details</button>
        `;
        countriesContainer.appendChild(countryDiv);
    })
}

    const loadCountryFlag = (code) =>{
        // https://restcountries.com/v3.1/alpha/{code}
        const url = `https://restcountries.com/v3.1/alpha/${code}`
        
        console.log(url);
        fetch (url)
        .then (res => res.json())
        .then (data => displayCountryDetail(data[0]))
    }

    const displayCountryDetail = country =>{
        const countryDetail = document.getElementById('country-detail');
        countryDetail.innerHTML = `
        <h2>Country Name: ${country.name.common}</h2>
        <img src="${country.flags.png}">
        `;
    }

 loadCountries();