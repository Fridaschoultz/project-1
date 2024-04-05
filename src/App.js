import React, { useState } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import WeatherInfo from './components/WeatherInfo';
import Map from './components/Map';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const API_KEY = '45548ae077a8de436714c2c723391bc5';

  const fetchWeatherData = async (city) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await response.json();
      if (data.cod === 200) {
        setWeatherData(data);
        setError('');
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Error fetching weather data');
    }
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchForm onSubmit={fetchWeatherData} />
      {error && <div className="error">{error}</div>}
      {weatherData && (
        <>
          <WeatherInfo weatherData={weatherData} />
          <Map weatherData={weatherData} />
        </>
      )}
    </div>
  );
}

export default App;
