import React from 'react'
import ListItem from '../ListItem'
import "./list.css"

type ListProps = {
    searchHistory: any
}

function List(props: ListProps) {
  console.log(props.searchHistory)
  return (
    <div><ul className='ul'>
      {props.searchHistory.map((item: []) => <ListItem data={item} />)}
    </ul></div>
  )
}

export default List