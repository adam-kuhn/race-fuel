import React from 'react'

const LapDistance = (props) => {
  const {text, km, name, value, change} = props
  return (
    <p className="card-text list-item">
      {km ? text.km : text.mi}
      <input className="form-control" name={name}
        value={value} onChange={change}
        placeholder="0"
        data-text={km ? text.km : text.mi}/>
    </p>
  )
}

export default LapDistance
