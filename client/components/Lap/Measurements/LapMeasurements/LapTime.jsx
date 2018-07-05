import React from 'react'

const LapTime = (props) => {
  const {text, name, value, change} = props
  return (
    <p className="card-text">
      {text}
      <input className="form-control" name={name}
        value={value} onChange={change}
        placeholder="0"/>
    </p>
  )
}

export default LapTime
