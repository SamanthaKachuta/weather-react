import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              {/* DATE and DESCRIPTION on the SAME line now */}
              <FormattedDate date={props.data.date} />{props.data.description}
            </li>
            <li>
              Humidity: <span className="highlight">{props.data.humidity}%</span>, Wind:{" "}
              <span className="highlight">{props.data.wind} km/h</span>
            </li>
          </ul>
        </div>
        <div className="col-6">
          <div className="temperature-container d-flex justify-content-end">
            <WeatherIcon code={props.data.icon} size={52} />
            <div className="float-left">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}