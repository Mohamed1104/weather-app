import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Display from './Components/Display';
import Input from './Components/Input'; 

function App() {

  const [city, setCity] = useState("London")
  // const [count, setCount] = useState(0)
  const [weather, setWeather] = useState([])

  // const key :string = process.env.API_KEY
  

  // fetch Api
 useEffect(()=>{
  
  async function fetchApi (){
    const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9e4d7e2b08ce23aec75dd2d758cb8afe`)
    const data = await response.json()
    console.log(data)
    console.log(city)
    setWeather(data)
    

  }

  fetchApi()

 },[city])
  return (
    <div className="App">
      <Input setCity={setCity} />
      <Display weather={weather}/>
    
    </div>
  );
}

export default App;
