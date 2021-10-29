createLogos();
createOrganizers();
function showAssistForm(){
  document.getElementById("assistForm").style.display="block";
}
function popUpLoginSuccesful(){
    document.getElementById("modal").style.display="block";
}
function closeModal(){
  document.getElementById("modal").style.display="none";
}

document.addEventListener('DOMContentLoaded', () => {

  const selectDrop = document.getElementById('countries');
  fetch('https://restcountries.com/v3.1/all').then(res => {
    return res.json();
  })
    .then(data => {
      let countryNames = [];
      let output = '<option disabled selected>Selecciona un país</option> '; //cubre la opcion default, que es la que se mostraria antes de seleccionar uno
      //filtrar aca si es solo paises de latam
      /**
       * para el filtro haria algo asi:
       * let latamCountries = []
       * un for each country con un filter cuya condicion sea (country.region=="Americas"&&country.subregion!="North America") -filtraria los paises americanos, excluyendo los norteamericanos
       * hacer el for each de aca abajo, pero desde la coleccion "latamCountries"
       * a countryNames pushearle "Mexico", y ahi hacer el sort
       */
      data.forEach(country => {
        //esto guarda los nombres de los paises en su traduccion al español
        countryNames.push(country.translations.spa.common);
      });
      countryNames.sort(); //acomodarlos en orden alfabetico
      countryNames.forEach(country => {
        output += `
            <option value="${country}">${country}</option>`; //añadirlos como opcion al select
      });
      selectDrop.innerHTML = output;
    })
    .catch(err => {
      console.log(err);
    });
});



