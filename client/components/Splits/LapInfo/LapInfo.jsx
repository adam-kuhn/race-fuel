import React from 'react'

const LapInfo = (props) => {
  const keys = Object.keys(props.info)
  return (
    <div>
      <p>Lap {props.info.lap}</p>
      {keys.map((item, idx) => {
        if (item !== 'time' || item !== 'lap') {
          return (
            <p className='card-text' key={idx}>{props.info[item].text} {props.info[item].value} </p>
          )
        } else {
          return (
            <p className='card-text' key={idx}>Time {props.info[item].hour || 0}hr {props.info[item].min || 0}min {props.info[item].sec || 0}s</p>
          )
        }
      })}
    </div>
  )
}

export default LapInfo
