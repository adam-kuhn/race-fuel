import React from 'react'

const LapInfo = (props) => {
  const keys = Object.keys(props.info)
  const data = keys.map((keyName, idx) => {
    if (keyName !== 'time') {
      return (
        <p key={idx}>{keyName} {props.info[keyName]} </p>
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
