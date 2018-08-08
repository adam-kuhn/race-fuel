import React from 'react'

const SplitNav = (props) => {
  const {errorMsg, nav} = props
  return (
    <div>
      <p className='split-info'>{errorMsg}</p>
      <button type='button' onClick={nav} value={-1}>SplitPrevious</button>
      <button type='button' onClick={nav} value={1}>Next</button>
    </div>
  )
}

export default SplitNav
