import React from 'react'

const SplitNav = (props) => {
  const {errorMsg, next, previous, nav} = props
  return (
    <div>
      <p>{errorMsg}</p>
      {/* <button type='button' onClick={previous} value={-1}>Previous</button>
      <button type='button' onClick={next} value={1}>Next</button> */}
      <button type='button' onClick={nav} value={-1}>SplitPrevious</button>
      <button type='button' onClick={nav} value={1}>Next</button>
    </div>
  )
}

export default SplitNav
