// Function to fetch weather data
function getWeatherData(city) {
    const apiKey = 'api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    return fetch(apiUrl)
        .then(response => response.json())
        .catch(error => console.error('Error fetching weather data:', error));
}

// Function to display current weather
function apiResponse() {
    const apiResponse = 
     [
      {
          "temp": 296.76,
          "feels_like": 296.98,
          "temp_min": 296.76,
          "temp_max": 297.87,
          "pressure": 1015,
          "sea_level": 1015,
          "grnd_level": 933,
          "humidity": 69,
          "temp_kf": -1.11
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": [
         {
          "all": 100
         
        },
        "wind": {
          "speed": 0.62,
          "deg": 349,
          "gust": 1.18
        },
      {
        "dt": 1661882400,
        "main": {
          "temp": 295.45,
          "feels_like": 295.59,
          "temp_min": 292.84,
          "temp_max": 295.45,
          "pressure": 1015,
          "sea_level": 1015,
          "grnd_level": 931,
          "humidity": 71,
          "temp_kf": 2.61
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 96
        },
        "wind": {
          "speed": 1.97,
          "deg": 157,
          "gust": 3.39
        },
        "visibility": 10000,
        "pop": 0.33,
        "rain": {
          "3h": 0.57
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2022-08-30 18:00:00"
      },
      {
        "dt": 1661893200,
        "main": {
          "temp": 292.46,
          "feels_like": 292.54,
          "temp_min": 290.31,
          "temp_max": 292.46,
          "pressure": 1015,
          "sea_level": 1015,
          "grnd_level": 931,
          "humidity": 80,
          "temp_kf": 2.15
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 68
        },
        "wind": {
          "speed": 2.66,
          "deg": 210,
          "gust": 3.58
        },
        "visibility": 10000,
        "pop": 0.7,
        "rain": {
          "3h": 0.49
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2022-08-30 21:00:00"
      },
      {
        "dt": 1662292800,
        "main": {
          "temp": 294.93,
          "feels_like": 294.83,
          "temp_min": 294.93,
          "temp_max": 294.93,
          "pressure": 1018,
          "sea_level": 1018,
          "grnd_level": 935,
          "humidity": 64,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 88
        },
        "wind": {
          "speed": 1.14,
          "deg": 17,
          "gust": 1.57
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2022-09-04 12:00:00"
      }
    ],
    "city": {
      "id": 3163858,
      "name": "Zocca",
      "coord": {
        "lat": 44.34,
        "lon": 10.99
      },
      "country": "IT",
      "population": 4593,
      "timezone": 7200,
      "sunrise": 1661834187,
      "sunset": 1661882248
    }
]
  }

          
      
function displayCurrentWeather(weatherData) {
    const currentWeatherDiv = document.querySelector('.today');
    currentWeatherDiv.innerHTML = `
        <h2>${weatherData.name}</h2>
        <p>Temperature: ${weatherData.main.temp}°C</p>
        <p>Humidity: ${weatherData.main.humidity}%</p>
        <p>Wind Speed: ${weatherData.wind.speed} m/s</p>
    `;
}

// Function to display 5-day forecast
function displayForecast(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const forecastData = data.list.slice(0, 5); // Take first 5 entries for 5-day forecast
            const forecastDiv = document.querySelector('.fiveDay');
            forecastDiv.innerHTML = '<h2>5-Day Forecast</h2>';
            forecastData.forEach(item => {
                forecastDiv.innerHTML += `
                    <div>
                        <p>Date: ${new Date(item.dt * 1000).toLocaleDateString()}</p>
                        <p>Temperature: ${item.main.temp}°C</p>
                        <p>Humidity: ${item.main.humidity}%</p>
                        <p>Wind Speed: ${item.wind.speed} m/s</p>
                    </div>
                `;
            });
        })
}
