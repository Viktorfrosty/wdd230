const cityLocation = document.querySelector("#city-location");

const weather = document.querySelector("#city-weather");

const weatherIcon = document.querySelector("#weather-icon");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=10.0739&lon=-69.3228&units=imperial&appid=6e850696e089a955d7a35792a60c403b";

function displayInfo(rawData) {

    let city = rawData.name;

    let country = rawData.sys.country;

    let temp = rawData.main.temp;

    let desc = rawData.weather[0].description;

    let icon = `https://openweathermap.org/img/w/${rawData.weather[0].icon}.png`;

    let image = document.createElement("img");

    image.setAttribute("src", icon)

    image.setAttribute("alt", `${desc} icon`)

    image.setAttribute("loading", "lazy");

    image.setAttribute("width", "50");

    image.setAttribute("height", "50");

    weatherIcon.appendChild(image);

    cityLocation.textContent = `${city}, ${country}`;

    weather.innerHTML = `${temp} &deg;F - ${desc}`;

};

async function getWeatherInfo() {

    try {
            
        const urlResponse = await fetch(url);

        if (urlResponse.ok) {
            
            const rawData = await urlResponse.json();

            displayInfo(rawData);

        } else {

            throw Error(await urlResponse.text());

        }

    } catch (error) {

        console.log(error);
        
    }

};

getWeatherInfo();