// Function to get the user's current location and fetch weather
function getLocationAndWeather() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
  
        console.log("Latitude: " + latitude);
        console.log("Longitude: " + longitude);
  
        // Now that you have the user's location, you can use it to fetch weather data
        getWeather(latitude, longitude);
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
  
        console.log("Latitude: " + latitude);
        console.log("Longitude: " + longitude);
  
        // Now that you have the user's location, you can use it to fetch weather data
        getWeather(latitude, longitude);
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }
  
  // Function to fetch weather data based on location
  function getWeather(latitude, longitude) {
    const apiKey = '7fEOShCtD9cd1m06Elb6tS3uEBDP3hKs';
    const apiUrl = `https://api.tomorrow.io/v4/weather/forecast?location=${latitude},${longitude}&apikey=${apiKey}`;
  
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
      },
    };
  
    fetch(apiUrl, options)
      .then(response => response.json())
      .then(data => {
        displayWeather(data); // Uncomment this line
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        alert('Error fetching weather data. Please try again.');
      });
  }
  
  // Function to display weather data
  function displayWeather(data) {
    var weatherInfoElement = document.getElementById('weatherInfo');
  
    // Extract relevant information from the data
    var temperature = data.current.temperature;
    var summary = data.current.weather.description;
  
    // Create HTML content to display weather information
    var weatherHtml = `<p>Temperature: ${temperature}°C</p>`;
    weatherHtml += `<p>Summary: ${summary}</p>`;
  
    // Set the content of the weatherInfoElement
    weatherInfoElement.innerHTML = weatherHtml;
  
    // Add your code here to display weather information on the UI
    console.log("Weather data:", data);
  }
  
  // Call the function to get the user's location and fetch weather
  getLocationAndWeather();
  
