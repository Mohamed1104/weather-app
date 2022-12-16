import React from 'react'
import "./listItem.css"

type listItemProps = {
  data: any
}

function ListItem(props: listItemProps) {
  return (
    <li className='li'>{props.data[0]}: {props.data[1]}°C</li>
  )
}

export default ListItem