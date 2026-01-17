import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function load() {
    let apiKey = "eac360db5fc86ft86450f3693e73o43f";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  function dayFormat(timestamp) {
    let date = new Date(timestamp * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[date.getDay()];
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <div className="WeatherForecast-day">
                    {dayFormat(dailyForecast.time)}
                  </div>
                  <WeatherIcon code={dailyForecast.condition.icon} size={36} />
                  <div className="WeatherForecast-temperatures">
                    <span className="WeatherForecast-temperature-max">
                      {Math.round(dailyForecast.temperature.maximum)}°
                    </span>
                    <span className="WeatherForecast-temperature-min">
                      {Math.round(dailyForecast.temperature.minimum)}°
                    </span>
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();
    return null;
  }
}