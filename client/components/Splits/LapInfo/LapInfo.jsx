import React from 'react'

const LapInfo = (props) => {
  const keys = Object.keys(props.info)
  const data = keys.map((keyName, idx) => {
    if (keyName !== 'time') {
      return (
        <p className='card-text' key={idx}>{keyName} {props.info[keyName]} </p>
      )
    } else {
      return (
        <p className='card-text' key={idx}>{keyName} {props.info[keyName].hour || 0}hr {props.info[keyName].min || 0}min {props.info[keyName].sec || 0}s</p>
      )
    }
  })
  return (
    <div>
      {data}
    </div>
  )
}

export default LapInfo
