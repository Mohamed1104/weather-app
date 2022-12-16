import React from 'react'

type ButtonProps = {
    handleClick: () => void
}

export default function Button(props: ButtonProps) {
  const {handleClick} = props
  return (
    <div>
        <button onClick={handleClick}> get weather! </button>
    </div>
  )
}
