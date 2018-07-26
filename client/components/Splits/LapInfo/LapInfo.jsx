import React from 'react'

const LapInfo = (props) => {
  const keys = Object.keys(props.info)
  console.log(keys)
  const data = keys.map((item, idx) => {
    if (item !== 'time') {
      return (
        <p className='card-text' key={idx}>{props.info[item].text} {props.info[item].value} </p>
      )
    } else {
      return (
        <p className='card-text' key={idx}>Time {props.info[item].hour.value || 0}hr {props.info[item].min.value || 0}min {props.info[item].sec.value || 0}s</p>
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
