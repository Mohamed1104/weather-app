import React from 'react'
import { AllData } from '../../types'


type DisplayProps = {
    weather: AllData
}

export default function Display(props: DisplayProps) {
  const { weather } = props
  return (
    <div>
      <h2>
        <p>The weather in {weather.name} is {weather.weather[0].description}. </p>
        <p>The temperature is {weather.main.temp}°C but it feels like {weather.main.feels_like}°C.</p>
        <p>With highs of {weather.main.temp_max}°C and lows of {weather.main.temp_min}°C.</p>
      </h2>

    </div>
  )
}
