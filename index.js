


let weatherForm = document.querySelector(".weatherForm");
let cityInput = document.querySelector(".cityInput");
let card = document.querySelector(".card");
let apiKey = "87da805b6b8b3c0ad26af9cd3585cc13";


weatherForm.addEventListener("submit", async event => {

    event.preventDefault();
    let city = cityInput.value;
    if(city){
        try{
            const data = await getWeatherData(city);
            displayWeatherInfo(data);
        }catch(error){
            displayError(error.message);
        }
    }
    else{
        displayError("Please enter a city");
    }
})

async function getWeatherData(city){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(url);    
    if(!response.ok){
        throw new Error("City not found");
    }
    const data = await response.json();
    return data;

}

function displayWeatherInfo(data){
    const{name: city, main: {temp, humidity}, weather:[{description, id}]} = data;

    card.textContent = "";
    card.style.display = "flex";
    card.style.alignItems = "center";
    
    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");
    const desDisplay = document.createElement("p");

    cityDisplay.textContent = city;
    tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    desDisplay.textContent = description;
    weatherEmoji.textContent = getWeatherEmoji(id);


    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    desDisplay.classList.add("desDisplay");
    weatherEmoji.classList.add("weatherEmoji");
    

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(desDisplay);
    card.appendChild(weatherEmoji);
}

function getWeatherEmoji(weatherID){
    switch(true){
        case(weatherID >= 200 && weatherID < 300):
            return "⛈️";
        case(weatherID >= 300 && weatherID < 400):
            return "🌧️";
        case(weatherID >= 500 && weatherID < 600):
            return "🌧️";
        case(weatherID >= 600 && weatherID < 700):
            return "❄️";
        case(weatherID >= 700 && weatherID < 800):
            return "🌫️";
        case(weatherID === 800):
            return "☀️";

    }

}

function displayError(message){
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay")

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);

}