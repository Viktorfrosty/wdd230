const url = "https://api.openweathermap.org/data/2.5/forecast?lat=10.0739&lon=-69.322&appid=6e850696e089a955d7a35792a60c403b";

const cityLocation = document.querySelector("#location");

async function getInfo() {

    try {
            
        let rawInfo = await fetch(url);

        if (rawInfo.ok) {
            
            let processedInfo = await rawInfo.json();
        
            displayLocation(processedInfo.city);

            displayWeather(processedInfo)

        } else {

            throw Error(await rawInfo.text());

        }

    } catch (error) {

        console.log(error);
        
    };

};

function displayLocation(location) {

    const city = location.name;

    const country = location.country;

    cityLocation.textContent = `${city}, ${country}`;

};

getInfo();