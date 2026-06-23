function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "8573ba0acd3fb2d400d73fd17f433915"; // <-- paste your key here

    if (city === "") return;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error("City not found");
            return response.json();
        })
        .then(data => {
            document.getElementById("city").innerText = data.name;
            document.getElementById("temp").innerText = "Temperature: " + data.main.temp + "°C";
            document.getElementById("desc").innerText = "Condition: " + data.weather[0].description;
            document.getElementById("humidity").innerText = "Humidity: " + data.main.humidity + "%";
        })
        .catch(error => {
            alert("City not found!");
        });
}