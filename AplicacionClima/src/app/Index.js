const { Clima } = require('./Clima');
const { UI } = require('./UI');;

const clima = new Clima("London", "uk");
require("./index.css");

const ui = new UI();

async function fetchWeather () {
	const data = await clima.getWeather ();
	ui.render(data);
}

document.addEventListener("DOMContentLoaded", fetchWeather());