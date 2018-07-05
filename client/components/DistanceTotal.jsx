import React from 'react'

const DistanceTotal = (props) => {
  const {text, textMi, total, km} = props
  if (km) {
    return (
      <p className="card-text">
        {text} {total}</p>
    )
  } else {
    return (
      <p className="card-text">
        {textMi} {total}</p>
    )
  }
}

export default DistanceTotal
