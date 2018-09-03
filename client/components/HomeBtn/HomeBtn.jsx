import React from 'react'
import {Link} from 'react-router-dom'

const HomeBtn = () => {
  return (
    <div className="center">
      <Link to='/'>
        <button type='button' className="btn btn-danger">
          Start Over</button>
      </Link>
    </div>
  )
}

export default HomeBtn
