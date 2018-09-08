import React from 'react'

const DistanceTotal = (props) => {
  const {text, total, km} = props
  return (
    <div className='list-item card-text'>
      <p>
        {km ? text.km : text.mi}:
      </p>
      <p>{total}</p>
    </div>
  )
}

export default DistanceTotal
