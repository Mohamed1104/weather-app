import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Display from "./Components/Display";
import Input from "./Components/Input";
import List from "./Components/List";
import { AllData } from "./types";

function App() {
  const [className, setClassName] = useState("neutral");
  const [imgSrc, setImgSrc] = useState(
    "https://cdn-icons-png.flaticon.com/512/1163/1163624.png"
  );
  const [city, setCity] = useState("London");
  const [weather, setWeather] = useState<AllData | null>(null);
  const [searchHistory, setSearchHistory] = useState<any>([]);

  // const key :string = process.env.API_KEY

  // fetch Api
  useEffect(() => {
    async function fetchApi() {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9e4d7e2b08ce23aec75dd2d758cb8afe`
      );
      const data = await response.json();
      console.log(data);
      if (data.cod === "404") {
        alert("Oops! Did you enter the correct city?");
        setWeather(null);
      } else if (data.cod === 200) {
        setWeather(data);
      }
    }
    fetchApi();
    handleHistory();
  }, [city]);

  useEffect(() => {
    changeBackground();
    changeImage();
  }, [weather]);

  function changeBackground() {
    if (weather !== null) {
      const description = weather.weather[0].description;
      const descArr = description.split(" ");
      console.log(descArr);
      if (descArr.includes("clouds")) {
        setClassName("clouds");
      }
      if (descArr.includes("clear")) {
        setClassName("neutral");
      }
      if (descArr.includes("drizzle")) {
        setClassName("rain");
      }
      if (descArr.includes("snow")) {
        setClassName("snow");
      }
      if (descArr.includes("mist")) {
        setClassName("mist");
      }
    }
  }

  function changeImage() {
    if (weather !== null) {
      const temp = weather?.main.temp;
      if (temp < 10) {
        setImgSrc("https://cdn-icons-png.flaticon.com/512/615/615669.png");
      }
      if (temp > 10 && temp < 15) {
        setImgSrc("https://cdn-icons-png.flaticon.com/512/1163/1163624.png");
      }
      if (temp > 15 && temp < 20) {
        setImgSrc("https://cdn-icons-png.flaticon.com/512/2698/2698213.png");
      }
      if (temp > 20) {
        setImgSrc("https://cdn-icons-png.flaticon.com/512/3222/3222675.png");
      }
    }
  }

  function handleHistory() {
    if (weather !== null) {
      const newSearch = [weather?.name, weather?.main.temp];
      setSearchHistory([...searchHistory, newSearch]);
    }
  }

  return (
    <div className={className}>
      <h1 className="h1"> Weather App</h1>
      <p className="p"> Get the latest info for the city you enter!</p>
      <Input setCity={setCity} />
      <img src={imgSrc} className="icon" />
      {weather === null ? (
        <p>Enter your city to find out current weather!</p>
      ) : (
        <div className="container">
          <Display weather={weather} />
          <List searchHistory={searchHistory} />
        </div>
      )}
    </div>
  );
}

export default App;
