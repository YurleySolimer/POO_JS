const { Clima } = require('./Clima');
const { UI } = require('./UI');
const { Store } = require('./Store');

const storage = new Store();
const {city, countryCode}= storage.getLocationData();
const clima = new Clima(city, countryCode);

const ui = new UI();

require("./index.css");

async function fetchWeather () {
	const data = await clima.getWeather ();
	ui.render(data);
}

document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const countryCode = document.getElementById('countryCode').value
  clima.changeLocation(city, countryCode);
  storage.setLocationData(city, countryCode);
  fetchWeather();
  e.preventDefault(); 

});


document.addEventListener("DOMContentLoaded", fetchWeather());