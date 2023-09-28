const cityElement = document.getElementById("cidade");
const api_key = 'ebc7bba7a7de0815ba6cb1ffa7250fb3';
const tempElement = document.getElementById('temperatura');
const descElement = document.getElementById('descricao');
const umidElement = document.getElementById('umidade');
const botaoPesquisa = document.getElementById('btn') 
const cityLocate = document.getElementById('city')

const tempMin = document.getElementById('temp_min')
const tempMax = document.getElementById('temp_max')



const getWeatherData = async (city) => {
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}&lang=pt_br`;

    const res = await fetch(apiURL);
    const data = await res.json();

    return data;
}


const showData = async (city) =>{
    const data = await getWeatherData(city);
    cityLocate.innerHTML = data.name;
    tempElement.innerHTML = parseInt(data.main.temp);
    descElement.innerHTML = data.weather[0].description; 
    umidElement.innerHTML = parseInt(data.main.feels_like);
}

function executaAPI(){
    const city = cityElement.value

    showData(city)
};