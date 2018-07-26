import React from 'react'

const LapTime = (props) => {
  const {text, lapState, change} = props
  return (
    <div>
      <p className="card-text">
        {text.main}:
      </p>
      <div className='time'>
        <p>{text.hour}
          <input className="form-control time-input" name={text.hour}
            value={lapState[text.hour] ? lapState[text.hour].value : ''} onChange={change}
            placeholder="0" data-text={text.hour}/>
        </p>
        <p>
          {text.min}
          <input className="form-control time-input" name={text.min}
            value={lapState[text.min] ? lapState[text.min].value : ''} onChange={change}
            placeholder="0" data-text={text.min}/>
        </p>
        <p>
          {text.sec}
          <input className="form-control time-input" name={text.sec}
            value={lapState[text.sec] ? lapState[text.sec].value : ''} onChange={change}
            placeholder="0" data-text={text.sec}/>
        </p>
      </div>
    </div>
  )
}

export default LapTime
