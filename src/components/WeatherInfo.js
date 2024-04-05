import React from 'react';

function WeatherInfo({ weatherData }) {
  return (
    <div className="weather-info">
      <h2>{weatherData.name}, {weatherData.sys.country}</h2>
      <p>Temperature: {weatherData.main.temp}°C</p>
      <p>Description: {weatherData.weather[0].description}</p>
    </div>
  );
}

export default WeatherInfo;
