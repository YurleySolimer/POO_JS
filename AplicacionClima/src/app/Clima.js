export class Clima {
	constructor (city, cCode) {
		this.apiKey = "fcf52385477f3f4bdda647078d63e637"; 
		this.city = city;
		this.cCode = cCode;
	}

  async getWeather() {
    const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.cCode}&appid=${this.apiKey}&units=metric`;
    const response = await fetch(URI);
    const data = await response.json();
    return data;
  }

  changeLocation(city, cCode) {
    this.city = city;
    this.cCode = cCode;
  }
}