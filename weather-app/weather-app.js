const apiKey = "bc70641c405caea7062129b0e76b50e9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        const data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "./weather-app-img/images/clouds.png";
            document.querySelector(".description").innerHTML = data.weather[0].description;
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "./weather-app-img/images/clear.png";
            document.querySelector(".description").innerHTML = data.weather[0].description;
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "./weather-app-img/images/rain.png";
            document.querySelector(".description").innerHTML = data.weather[0].description;
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "./weather-app-img/images/Drizzle.png";
            document.querySelector(".description").innerHTML = data.weather[0].description;
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "./weather-app-img/images/mist.png";
            document.querySelector(".description").innerHTML = data.weather[0].description;
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

}

searchBtn.addEventListener("click", () => {

    checkWeather(searchInput.value);
    searchInput.value = "";
})


// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}