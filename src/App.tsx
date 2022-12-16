import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Display from './Components/Display';
import Input from './Components/Input'; 
import { AllData}  from './types';

function App() {
  const [className, setClassName] = useState('neutral')
  const [city, setCity] = useState("London")
  const [weather, setWeather] = useState < AllData | null>(null)

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
  }
  }
   
 }

 

  return (
    <div className={className}>
      <Input setCity={setCity} />
      {weather === null ? <p>Enter your city to find out current weather!</p> :
      <Display weather={weather}/> }
    
    </div>
  );
}

export default App;
