import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Display from './Components/Display';
import Input from './Components/Input'; 
import List from './Components/List';
import { AllData}  from './types';

function App() {
  const [className, setClassName] = useState('neutral')
  const [city, setCity] = useState("London")
  const [weather, setWeather] = useState < AllData | null>(null)
  const [searchHistory, setSearchHistory] = useState<any>([])

  // const key :string = process.env.API_KEY

  // fetch Api
 useEffect(()=>{
  async function fetchApi (){
    const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9e4d7e2b08ce23aec75dd2d758cb8afe`)
    const data = await response.json()
    console.log(data)
    if (data.cod === '404') {
      alert("Oops! Did you enter the correct city?")
      setWeather(null)
    } else if (data.cod === 200) {
      setWeather(data)
    }
  }
  fetchApi()
  handleHistory()
 },[city])


 useEffect(()=>{
  changeBackground()
 }, [weather])


 function changeBackground() {
  if(weather !== null){
    const description = weather.weather[0].description
    const descArr = description.split(' ')
    console.log(descArr)
   if (descArr.includes('clouds')) {
     setClassName("clouds")
   }
   if (descArr.includes('clear')) {
    setClassName("neutral")
  }
  if (descArr.includes('drizzle')) {
    setClassName("rain")
  }
  if (descArr.includes('snow')) {
    setClassName("snow")
  }}
 }

 function handleHistory() {
  if (weather !== null) {
    const newSearch = [weather?.name, weather?.main.temp]
    setSearchHistory([...searchHistory, newSearch])
  }
 }
 

  return (
    <div className={className}>
      <Input setCity={setCity} />
      {weather === null ? <p>Enter your city to find out current weather!</p> :
      <Display weather={weather}/> }
      Your search history:
      <List searchHistory={searchHistory}/>
    </div>
  );
}

export default App;
