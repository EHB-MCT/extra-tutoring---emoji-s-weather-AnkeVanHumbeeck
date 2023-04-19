"use strict";

let weather = [];

const weatherApp = {
	init() {
		document.getElementById("form").addEventListener("submit", this.changeCity);
	},
	changeCity(e) {
		//to clear html

		//to change name
		console.log("click");
		e.preventDefault();
		const cityName = document.getElementById("search").value;
		weatherApp.fetchWeatherData(cityName);
		console.log(cityName);
	},
	fetchWeatherData(city) {
		fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=d7b955c4c268fe54649d6f0d702b39d1&units=metric`)
			.then((response) => response.json())
			.then(function (data) {
				console.log(data);
				weatherApp.renderWeatherData(data);
			});
	},
	renderWeatherData(weatherData) {
		const weather = `
    <h2>Weather</h2>
      <ul>
        <li>Average tempature: ${weatherData.main.temp} °C</li>
        <li>Min tempature: ${weatherData.main.temp_min} °C</li>
        <li>Max tempature: ${weatherData.main.temp_max} °C</li>
        <li>Description: ${weatherData.weather[0].description}</li>
      </ul>
    `;

		document.querySelector("#weatherResult").insertAdjacentHTML("afterbegin", weather);
	},
};

weatherApp.init();
