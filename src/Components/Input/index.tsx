import React, {useState} from 'react'
import Button from '../Button'


type InputProps ={
    setCity: (input: string) => void
    
}

export default function Input(props: InputProps) {
 
const { setCity} = props
const [input, setInput] = useState("")

function handleInput(e: React.ChangeEvent<HTMLInputElement> ){
    setInput(e.target.value)
    console.log("its changing", e.target.value)
}

function handleClick(){
  setCity(input)
  console.log(input)
  setInput("")
}

  return (
    <div>
        <input onChange={handleInput} placeholder="input your city" value={input}></input>
        <Button handleClick={handleClick}/>
    </div>
  )
}