import React from 'react'

const SplitNav = (props) => {
  const {errorMsg, nav} = props
  return (
    <div>
      <p className='split-info'>{errorMsg}</p>
      <button type='button' onClick={nav} value={-1}
        className="far fa-arrow-alt-circle-left">
      </button>
      <button type='button' onClick={nav} value={1}
        className="far fa-arrow-alt-circle-right">
      </button>
    </div>
  )
}

export default SplitNav
