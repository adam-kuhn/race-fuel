import React from 'react'

const TimeTotal = (props) => {
  const {text, total} = props
  return (
    <p className="card-text">{text} {total}</p>
  )
}

export default TimeTotal
