import React from 'react'

import SplitBarGraph from './SplitBarGraph/SplitBarGraph'

const LapInfo = (props) => {
  const keys = Object.keys(props.info)
  return (
    <div>
      <p>Lap {props.info.lap}</p>
      {keys.map((item, idx) => {
        if (item !== 'lap') {
          if (item !== 'time') {
            return (
              <p className='card-text' key={idx}>{props.info[item].text} {props.info[item].value} </p>
            )
          } else {
            return (
              <p className='card-text' key={idx}>Time {props.info[item].hour || 0}hr {props.info[item].min || 0}min {props.info[item].sec || 0}s</p>
            )
          }
        }
      })}
      <SplitBarGraph lapInfo={props}/>
    </div>
  )
}

export default LapInfo
