import React from 'react'
import './button.css'

type ButtonProps = {
    handleClick: () => void
}

export default function Button(props: ButtonProps) {
  const {handleClick} = props
  return (
    <div>
        <button className='Button' onClick={handleClick}> get weather! </button>
    </div>
  )
}
