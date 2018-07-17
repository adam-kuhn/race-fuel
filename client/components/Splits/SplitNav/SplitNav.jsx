import React from 'react'

const SplitNav = (props) => {
  const {errorMsg, next, previous} = props
  return (
    <div>
      <p>{errorMsg}</p>
      <button type='button' onClick={previous}>Previous</button>
      <button type='button' onClick={next}>Next</button>
    </div>
  )
}

export default SplitNav
