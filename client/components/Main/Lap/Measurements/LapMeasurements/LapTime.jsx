import React from 'react'

const LapTime = (props) => {
  const {text, value, change} = props
  return (
    <div>
      <p className="card-text">
        {text.main}:
      </p>
      <div className='time'>
        <p>{text.hour}
          <input className="form-control time-input" name={text.hour}
            value={value[text.hour] || ''} onChange={change}
            placeholder="0"/>
        </p>
        <p>
          {text.min}
          <input className="form-control time-input" name={text.min}
            value={value[text.min] || ''} onChange={change}
            placeholder="0"/>
        </p>
        <p>
          {text.sec}
          <input className="form-control time-input" name={text.sec}
            value={value[text.sec] || ''} onChange={change}
            placeholder="0"/>
        </p>
      </div>
    </div>
  )
}

export default LapTime
