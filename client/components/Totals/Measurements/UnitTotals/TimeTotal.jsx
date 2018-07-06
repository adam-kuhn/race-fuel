import React from 'react'

const TimeTotal = (props) => {
  const {text, total} = props
  return (
    <p className="card-text">{text.main} {total}</p>
  )
}

export default TimeTotal
