import React from 'react'

const FuelInput = (props) => {
  const {value, name, change} = props
  return (
    <input className='form-control'
      value={value}
      name={name}
      onChange={change}
      placeholder="0"/>
  )
}

export default FuelInput
