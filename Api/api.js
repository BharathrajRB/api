const apiKey = "b4b0f73ba8f7ec6ab498612317933636";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();
  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "&deg;C";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
  document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
  if (data.weather[0].main == "Clouds") {
    weathericon.src = "images/clouds.png";
  }
  else if (data.weather[0].main == "Clear") {
    weathericon.src = "images/clear.png";
  }
  else if (data.weather[0].main == "Rain") {
    weathericon.src = "images/rain.png";
  }
  else if (data.weather[0].main == "Drizzle") {
    weathericon.src = "images/drizzle.png";
  }
  else if (data.wether[0].main == "Mist") {
    weathericon.src = "images/mist.png";
  }
  document.querySelector(".weather").style.display = "block";
}
searchBtn.addEventListener("click", () => {

  checkWeather(searchBox.value);
});