
function updateClock() {
    const now = new Date();
    document.getElementById('clock').textContent = now.toLocaleTimeString();
}

setInterval(updateClock, 1000);
updateClock();

async function fetchWeather() {
    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your API Key
    const city = 'YOUR_CITY'; // Replace with your city
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        document.getElementById('weather').textContent = `${data.main.temp}°C • ${data.weather[0].description}`;
    } catch (error) {
        document.getElementById('weather').textContent = 'Weather unavailable';
    }
}

fetchWeather();

const images = ["images/photo1.jpg", "images/photo2.jpg", "images/photo3.jpg"];
let current = 0;

setInterval(() => {
    current = (current + 1) % images.length;
    document.getElementById('slide').src = images[current];
}, 5000);
