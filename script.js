const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '53117dfd0amsh9c3753608cde580p1042b4jsn47cd04312786',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};

const getWeather = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
        
            console.log(response)

            //cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity 
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp 
            max_temp.innerHTML = response.max_temp 
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees 
            sunrise.innerHTML = response.sunrise 
            sunset.innerHTML = response.sunset
        })
        .catch(error => console.error(error));
}

const cities = ['Shanghai', 'Boston', 'Lucknow', 'Kolkata'];

const updateWeatherForCities = () => {
    cities.forEach(cty => {
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + cty, options)
            .then(response => response.json())
            .then(response => {
                console.log(response);

                document.getElementById(`${cty}_feel_like`).innerHTML = response.feels_like;
                document.getElementById(`${cty}_humid`).innerHTML = response.humidity;
                document.getElementById(`${cty}_max_tmp`).innerHTML = response.max_temp;
                document.getElementById(`${cty}_min_tmp`).innerHTML = response.min_temp;
                document.getElementById(`${cty}_wind_spd`).innerHTML = response.wind_speed;
                document.getElementById(`${cty}_wind_degree`).innerHTML = response.wind_degrees;
                document.getElementById(`${cty}_snrise`).innerHTML = response.sunrise;
                document.getElementById(`${cty}_snset`).innerHTML = response.sunset;
                document.getElementById(`${cty}_tmp`).innerHTML = response.temp;
            })
            .catch(error => console.error(error));
    });
};

submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
    updateWeatherForCities();
});


