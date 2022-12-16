import React from "react";
import { AllData } from "../../types";
import "./display.css";

type DisplayProps = {
  weather: AllData;
};

export default function Display(props: DisplayProps) {
  const { weather } = props;
  return (
    <div className="display">
      <div className="card">
        <h3 className="h3">{weather.name} </h3>
        <p>
          <b>Description:</b> {weather.weather[0].description}.{" "}
        </p>
        <p>Temperature: {weather.main.temp}°C</p>
        <p>Feels Like: {weather.main.feels_like}°C.</p>
        <p>
          With highs of {weather.main.temp_max}°C and lows of{" "}
          {weather.main.temp_min}°C.
        </p>
      </div>
    </div>
  );
}
