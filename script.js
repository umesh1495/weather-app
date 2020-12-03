const key = 'bb75ec54f44ef507c7e1aeb4bb964c23';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

const requestCity = async (city) => {
    const baseURL = 'http://api.openweathermap.org/data/2.5/weather';
    const query = `?q=${city}&appid=${key}`; 

    //make fetch call (promise call)
    const response = await fetch(baseURL + query);

    //promise data
    const respData = await response.json();
    console.log(respData);
    addWeatherToPage(respData);
}

function addWeatherToPage(data) {
    const temp = KtoC(data.main.temp);

    const weather = document.createElement("div");
    weather.classList.add("weather" );

    weather.innerHTML = `
        <h2><img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" /> ${temp}°C <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" /></h2>
        <small>${data.weather[0].description} </small>
    `;

    //cleanup
    main.innerHTML = "";
    main.appendChild(weather);
}

function KtoC(K) {
    return Math.floor(K - 273.15);

}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const city = search.value;

    if(city) {
        requestCity(city); 
    } 
}) 
 



