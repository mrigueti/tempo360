import { useState, useRef } from "react";
import axios from "axios";
import "./App.css";
import InfoWeather from "./components/InfoWeather";
import Weather5days from "./components/Weather5days";

function App() {
  const [weather, setWeather] = useState();
  const [weather5days, setWeather5days] = useState();

  const inputRef = useRef();

  async function SearchCity() {
    const city = inputRef.current.value;
    const key = "1171cc8e2920a8c261a4fbb3d127bdfc";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;
    const url5days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`;

    const apiInfo = await axios.get(url);
    const apiInfo5days = await axios.get(url5days);

    setWeather5days(apiInfo5days.data);
    setWeather(apiInfo.data);
  }

  return (
    <div className="container">

      <h1>Tempo360</h1>

      <input ref={inputRef} type="text" placeholder="Digite o nome do local" />
      <button onClick={SearchCity}>Buscar</button>

      {weather && <InfoWeather weather={weather} />}
      {weather5days && <Weather5days weather5days={weather5days} />}
    </div>
  );
}

export default App;
