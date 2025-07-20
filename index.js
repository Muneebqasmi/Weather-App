async function getWeather() {
    const city = document.getElementById("city_input").value;
    const url = `https://wttr.in/${city}?format=3`;
  
    try {
      const response = await fetch(url);
      const data = await response.text();
      document.getElementById("weather_result").innerText = data;
    } catch (err) {
      document.getElementById("weather_result").innerText = "Failed to fetch weather.";
    }
  }
  