import React, { useState, useEffect } from "react";
import "./App.css";
import CurrentWeather from "./components/CurrentWeather";
import Forecast from "./components/Forecast";
import SearchLocation from "./components/SearchLocation";

function App() {
  const [currentWeather, setCurrentWeather] = useState({});
  const [forecast, setForecast] = useState({});
  const [errMsg, setErrMsg] = useState("");

  const fetchCurrentWeather = async (location) => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=c17213c72d80848d5201a76aaa66d229&units=metric`
    );
    const data = await res.json();
    setCurrentWeather(data);
    if (data.cod === "404") setErrMsg(data.message);
    else setErrMsg("");
  };

  const fetchForecast = async (location) => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=c17213c72d80848d5201a76aaa66d229&units=metric`
    );
    const data = await res.json();
    setForecast(data);
  };

  useEffect(() => {
    fetchCurrentWeather();
    fetchForecast();
  }, []);

  const changeLocation = (location) => {
    fetchCurrentWeather(location);
    fetchForecast(location);
  };

  return (
    <div className="app">
      <SearchLocation changeLocation={changeLocation} />
      {errMsg !== "" && <span>{errMsg}</span>}
      <CurrentWeather currentWeather={currentWeather} />
      <Forecast forecast={forecast} />
    </div>
  );
}

export default App;
