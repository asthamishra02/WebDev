const apikey="e52191642226ea4ca5197fc6ff34c9d7";
const apiurl="https://api.openweathermap.org/data/2.5/weather?&appid=e52191642226ea4ca5197fc6ff34c9d7&units=metric&q="
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weathericon=document.querySelector(".weather-icon")


async function checkWeather(city)
{
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    let data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
    document.querySelector(".wind").innerHTML= data.wind.speed + " km/hr";
    if(data.weather[0].main === "Clouds"){
        weathericon.src="images/clouds.png"
    }
    else if(data.weather[0].main === "Clear"){
        weathericon.src="images/clear.png"
    }
    else if(data.weather[0].main === "Rain"){
        weathericon.src="images/rain.png"
    }
    else if(data.weather[0].main === "Drizzle"){
        weathericon.src="images/drizzle.png"
    }
    else if(data.weather[0].main === "humidity"){
        weathericon.src="images/humidity.png"
    }
    else if(data.weather[0].main === "Mist"){
        weathericon.src="images/mist.png"
    }

    else if(data.weather[0].main === "Snow"){
        weathericon.src="images/snow.png"
    }
    else if(data.weather[0].main === "Wind"){
        weathericon.src="images/wind.png"
    }
}
searchBtn.addEventListener('click',()=>{
    checkWeather(searchBox.value);
})
