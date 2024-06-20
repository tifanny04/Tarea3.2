// src/components/Weather.js

import React, { useState } from 'react';

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState('');
    const [error, setError] = useState('');

    const apiKey = '89d5b3ae9d390a346cc25c0541dd499a'; // Reemplaza con tu API Key de OpenWeatherMap

    const fetchWeather = async (city) => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
            if (!response.ok) {
                throw new Error('Ciudad no encontrada');
            }
            const data = await response.json();
            setWeatherData(data);
            setError('');
        } catch (err) {
            setError(err.message);
            setWeatherData(null);
        }
    };

    const handleSearch = () => {
        if (city) {
            fetchWeather(city);
        }
    };

    return (
        <div>
            <h1>Weather App</h1>
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Introduce una ciudad"
            />
            <button onClick={handleSearch}>Buscar</button>
            {error && <p>{error}</p>}
            {weatherData && (
                <div>
                    <h2>{weatherData.name}</h2>
                    <p>Temperatura: {weatherData.main.temp}°C</p>
                    <p>Clima: {weatherData.weather[0].description}</p>
                </div>
            )}
        </div>
    );
};

export default Weather;
