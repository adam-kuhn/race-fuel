import React from 'react'

const SplitNav = (props) => {
  const {errorMsg, nav} = props
  return (
    <div className='split-nav'>
      <p className='split-info'>{errorMsg}</p>
      <div>
        <button type='button' onClick={nav} value={-1}
          className="nav-btn ">left
          {/* <button type='button' onClick={nav} value={-1}
          className="nav-btn far fa-3x fa-arrow-alt-circle-left"> */}
        </button>
        <button type='button' onClick={nav} value={1}
          className="nav-btn">right
          {/* <button type='button' onClick={nav} value={1}
          className="nav-btn far fa-3x fa-arrow-alt-circle-right"> */}
        </button>
      </div>
    </div>
  )
}

export default SplitNav
