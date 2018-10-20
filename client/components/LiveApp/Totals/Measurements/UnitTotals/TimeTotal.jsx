import React from 'react'

const TimeTotal = (props) => {
  const {text, total} = props
  return (
    <div className='card-text list-item'>
      <p>{text.main}</p>
      <p>{total.hour}hr : {total.min}min : {total.sec}s</p>
    </div>

  )
}

export default TimeTotal
