const API_key = "240c641251721b924b1f8e5d425057a6";

const lat = 41;
const lon = 60;

const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`;

const cityName = document.querySelector(".city-name");
const degree = document.querySelector(".degree");
const weatherInfo = document.querySelector(".weather-info");
const coordinates = document.querySelector(".coordinates");

fetch(URL)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    let { name, coord, main, weather } = data;

    cityName.innerHTML = name;
    degree.innerHTML = Math.floor(main.temp - 273) + "°C";
    weatherInfo.innerHTML = weather[0].description;
    coordinates.innerHTML = `Koordinatalari: ${coord.lat}:${coord.lon}`;

    console.log(name);
    console.log(coord);
    console.log(main);
    console.log(weather[0].description);
  });
