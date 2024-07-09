const currentTemp = document.querySelector("#current-temp");

const weatherIcon = document.querySelector("#weather-icon");

const captionDesc = document.querySelector("figcaption");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.74880039212051&lon=6.641560548623244&units=imperial&appid=6e850696e089a955d7a35792a60c403b";

async function apiFetch() {

    try {

        const response = await fetch(url);

        if (response.ok) {
            
            const data = await response.json();

            console.log(data);

            displayResults(data)

        } else {

            throw Error(await response.text());

        }

    } catch (error) {

        console.log(error);
        
    }

}

function displayResults(data) {

    currentTemp.innerHTML = `${data.main.temp} &deg;F`;

    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    let desc = data.weather[0].description;

    captionDesc.textContent = `${desc}`

}

apiFetch();


// const testUrl = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

// async function testResult() {

//     const testResponse = await fetch(testUrl);

//     const supers = await testResponse.json();

//     const power = supers.members[2].powers[1];
    
//     console.log(power);

// }

// testResult();
