import React from 'react'

const TimeTotal = (props) => {
  const {text, total} = props
  return (
    <p className="card-text">{text.main}&nbsp;
      {total.hour}hr : {total.min}min : {total.sec}s</p>
  )
}

export default TimeTotal
