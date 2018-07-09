import React from 'react'

const DistanceTotal = (props) => {
  const {text, total, km} = props
  if (km) {
    return (
      <p className="card-text">
        {text.km} {total}</p>
    )
  } else {
    return (
      <p className="card-text">
        {text.mi} {total}</p>
    )
  }
}

export default DistanceTotal
