import React from 'react'

const FuelListItem = (props) => {
  return (
    <div className='fuel-list'>
      <p className='card-text'>{props.text}</p>
      <input className='form-control'
        value={props.value}
        name={props.name}
        onChange={props.change}
        placeholder="0"/>
    </div>
  )
}

export default FuelListItem
