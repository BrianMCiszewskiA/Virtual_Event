document.addEventListener('DOMContentLoaded', () => {
    
    const selectDrop = document.getElementById('countries');
    fetch('https://restcountries.com/v3.1/all').then(res => {
      return res.json();})
    .then(data => {
        let countryNames = [];
        let output = "";
        data.forEach(country => {
            countryNames.push(country.translations.spa.common);
        })
        console.log(countryNames);
        countryNames.sort();
        console.log(countryNames);
        countryNames.forEach(country => {
            output += `
            <option value="${country}">${country}</option>`;
        })
        selectDrop.innerHTML = output;})
    .catch(err => {
      console.log(err);
    })
});