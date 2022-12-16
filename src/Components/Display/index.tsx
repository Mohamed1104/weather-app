import React from 'react'

type DisplayProps = {
    weather: object
}


export default function Display(props: DisplayProps) {
    const { weather } = props
    // const weatherArr = []
    // weatherArr.push(weather)
    // console.log("this is the arr", weatherArr)
  return (
    <div>
      {/* {weather.map((city)=>(
        <h2> The weather in {city.name} is {city.description}</h2>
      ))} */}
      <h2> {weather.name}</h2>

    </div>
  )
}
