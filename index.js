const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelectorAll(".cityInput");
const card = document.querySelector(".card");
const apiKey = "87da805b6b8b3c0ad26af9cd3585cc13";


weatherForm.addEventListener("submit", async (e) => {

    e.preventDefault();
    const city = cityInput.value;
    if(city){
        try{
        const weatherData = await getWeatherData(city);
        displaWeatherInfo(weatherData);
    }
    catch(err){
        displayError(err);
        console.log(err);
    }
}
    else{
        displayError("Please enter a city name");
    
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

function displaWeatherInfo(data){
    console.log(data)


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