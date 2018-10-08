import React from 'react'

// import SplitBarGraph from './SplitBarGraph/SplitBarGraph'

const LapInfo = (props) => {
  const keys = Object.keys(props.info)
  return (
    <div>
      <p>Lap {props.info.lap}</p>
      {keys.map((item, idx) => {
        if (item !== 'lap') {
          if (item !== 'time') {
            return (
              <div className='card-text list-item' key={idx}>
                <p >{props.info[item].text}:</p>
                <p>{props.info[item].value}</p>
              </div>
            )
          } else {
            return (
              <div className='card-text list-item' key={idx}>
                <p>Time:</p>
                <p>{props.info[item].hour || 0}hr {props.info[item].min || 0}min {props.info[item].sec || 0}s</p>
              </div>
            )
          }
        }
      })}
      <div className='split-graph'>
        {/* <SplitBarGraph lapInfo={props}/> */}
      </div>
    </div>
  )
}

export default LapInfo
