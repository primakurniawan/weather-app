import React from "react";
import "./CurrentWeather.css";

const CurrentWeather = ({ currentWeather }) => {
  return (
    <div className="currentWeather">
      <h1 className="currentWeather__city">{currentWeather.name}</h1>
      <div className="currentWeather__weathers">
        {currentWeather.hasOwnProperty("weather") &&
          currentWeather.weather.map((e) => (
            <div className="currentWeather__weather">
              <div className="currentWeather__icon">
                <img
                  src={`http://openweathermap.org/img/wn/${e.icon}@2x.png`}
                  alt={e.icon}
                />
                <p className="currentWeather__icon--weather">
                  {e.main}
                  <br /> {e.description}
                </p>
              </div>
              <div className="currentWeather__info">
                {currentWeather.main.temp_min !== currentWeather.main.temp_max
                  ? `${currentWeather.main.temp_min}\u00b0c ~ ${currentWeather.main.temp_max}\u00b0c`
                  : `${currentWeather.main.temp}\u00b0c`}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CurrentWeather;
