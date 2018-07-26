import React from 'react'

const GoTo = (props) => {
  return (
    <button type='button' value={props.type}
      onClick={props.click} disabled={props.disable}>
      { props.text}
    </button>
  )
}

export default GoTo
