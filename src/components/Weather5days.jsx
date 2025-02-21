import "../components/Weather5days.css";

function Weather5days({ weather5days }) {
  console.log(weather5days);

  let dailyForecast = {};

  for (let forecast of weather5days.list) {
    const date = new Date(forecast.dt * 1000).toLocaleDateString();
    console.log(date);

    if (!dailyForecast[date]) {
      dailyForecast[date] = [];
    }
    dailyForecast[date].push(forecast);
  }
  const nextFiveDays = Object.values(dailyForecast)
    .map((day) => day[0])
    .slice(1, 6);

  function convertDate(date) {
    const newDate = new Date(date.dt * 1000).toLocaleDateString("pt-br", {
      weekday: "long",
      day: "2-digit",
    });
    return newDate;
  }
  return (
    <div className="weather-container">
      <h3>Previsão dos Próximos 5 Dias</h3>
      <div className="weather-list">
        {nextFiveDays.map((forecast) => (
          <div key={forecast.dt} className="weather-item">
            <p>{convertDate(forecast)}</p>
            <img
              src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
            />
            <p className="description5days">{forecast.weather[0].description}</p>
            <p>
              {Math.round(forecast.main.temp_min)}ºC min /{" "}
              {Math.round(forecast.main.temp_max)}ºC max
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Weather5days;
