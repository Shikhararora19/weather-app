const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelectorAll(".cityInput");
const card = document.querySelector(".card");
const apiKey = "87da805b6b8b3c0ad26af9cd3585cc13";


weatherForm.addEventListener("submit", (e) => {

    e.preventDefault();
    const city = cityInput.value;
    if(city){
        getWeatherData(city);
    }
    else{
        displayError("Please enter a city name");
    
    }
    cityInput.value = "";
})

async function getWeatherData(city){

}

function displaWeatherInfo(data){


}

function getWeatherEmoji(weatherID){

}

function displayError(message){
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay")

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);

}