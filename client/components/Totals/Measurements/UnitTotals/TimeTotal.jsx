import React from 'react'

const TimeTotal = (props) => {
  const {text, total} = props
  return (
    <p className="card-text">{text.main}&nbsp;&nbsp;
      {total.hour} : {total.min} : {total.sec}</p>
  )
}

export default TimeTotal
