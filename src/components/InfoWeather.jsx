import React from "react";
import "./InfoWeather.css";

function InfoWeather({ weather }) {

  // Verifica se qualquer uma das propriedades necessárias está ausente
  if (!weather || !weather.name || !weather.weather || !weather.weather[0] || !weather.weather[0].icon || !weather.main || !weather.main.temp) {
    return <div></div>;
  }

  return (
    <div className="weather-container">
      <h2>{weather.name}</h2>
      <div className="weather-info">
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
          alt="Weather icon"
        />
        <p className="temperature">{Math.round(weather.main.temp)} ºC</p>
      </div>
      <p className="description">{weather.weather[0].description}</p>
      <div className="details">
        <p>Sensação Térmica: {Math.round(weather.main.feels_like)} ºC</p>
        <p>Umidade: {weather.main.humidity}%</p>
        <p>Pressão: {weather.main.pressure}</p>
      </div>
    </div>
  );
}

export default InfoWeather;