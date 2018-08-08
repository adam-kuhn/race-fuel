import React from 'react'

const SplitNav = (props) => {
  const {errorMsg, nav} = props
  return (
    <div>
      <p className='split-info'>{errorMsg}</p>
      <button type='button' onClick={nav} value={-1}><i className="far fa-arrow-alt-circle-left"></i></button>
      <button type='button' onClick={nav} value={1}>
        <i className="far fa-arrow-alt-circle-right"></i>
      </button>
    </div>
  )
}

export default SplitNav
