import React from 'react'

type listItemProps = {
  data: any
}

function ListItem(props: listItemProps) {
  return (
    <li>{props.data[0]}: {props.data[1]}</li>
  )
}

export default ListItem