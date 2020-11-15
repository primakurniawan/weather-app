import React from "react";
import "./Forecast.css";

const Forecast = ({ forecast }) => {
  return (
    <div className="forecast">
      {forecast.hasOwnProperty("list") && (
        <>
          <h2 className="forecast__title">Forecast for next 5 day </h2>
          <div className="forecast__days">
            {forecast.list.map((e, i) => {
              const today = Date.now();
              if (i === 7 || i === 16 || i === 23 || i === 31 || i === 39) {
                return (
                  <div className="forecast__daily">
                    <div className="forecast__daily__date">
                      {new Date(
                        today + 1000 * 60 * 60 * 3 * (i + 1)
                      ).toDateString()}
                    </div>
                    <div className="forecast__daily__icon">
                      <img
                        src={`http://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`}
                        alt={e.weather[0].icon}
                      />
                      <p className="forecast__daily__icon--weather">
                        {e.weather[0].main}
                        <br />
                        {e.weather[0].description}
                      </p>
                    </div>
                    <div className="forecast__daily__info">
                      {e.main.temp_min !== e.main.temp_max
                        ? `${e.main.temp_min}\u00b0c ~ ${e.main.temp_max}\u00b0c`
                        : `${e.main.temp}\u00b0c`}
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Forecast;
