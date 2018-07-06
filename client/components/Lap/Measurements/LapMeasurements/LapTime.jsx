import React from 'react'

const LapTime = (props) => {
  const {text, value, change} = props
  return (
    <p className="card-text">
      {text.main} {text.hour}
      <input className="form-control" name={text.hour}
        value={value[text.hour] || ''} onChange={change}
        placeholder="0"/>
      {text.min}
      <input className="form-control" name={text.min}
        value={value[text.min] || ''} onChange={change}
        placeholder="0"/>
      {text.sec}
      <input className="form-control" name={text.sec}
        value={value[text.sec] || ''} onChange={change}
        placeholder="0"/>
    </p>
  )
}

export default LapTime
