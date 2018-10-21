import React from 'react'

import DeleteItem from './DeleteItem/DeleteItem'
const FuelListItem = (props) => {
  return (
    <div className='fuel-list'>
      <p className='card-text'>{props.text}
      </p>
      <div className='fuel-actions'>
        <input className='form-control'
          value={props.value}
          name={props.name}
          onChange={props.change}
          placeholder="0"/>
        <DeleteItem itemId={props.itemId} />
      </div>
    </div>
  )
}

export default FuelListItem
