let weather = {
    "apiKey": "a9458b6b945ecca418828524d153b99a",
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city 
            + "&units=imperial&appid=" 
            + this.apiKey
        ).then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const {temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = 'https://openweathermap.org/img/wn/' + icon + '.png';
        document.querySelector(".description").innerText = description;
        document.querySelector('.temperature').innerText = temp + '°F';
        document.querySelector('.humidity').innerText = "Humidity: " + humidity + "%";
        document.querySelector('.wind').innerText = 'Wind Speed: ' + speed + ' mph';
        document.querySelector('.weather').classList.remove("loading")
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
        document.body.style.backgroundSize = cover;
    },
    search: function() {
        this.fetchWeather(document.querySelector('.search-bar').value);
    }
};

document.querySelector(".search button").addEventListener("click", function(){
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event){
    if (event.key == "Enter") {
        weather.search();
    }
});

weather.fetchWeather("San Francisco, USA");