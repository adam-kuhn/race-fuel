import React from 'react'
import {Link} from 'react-router-dom'

const Authentication = () => {
  return (
    <div>
      <Link to='/auth/login'>Existing User</Link>
      <div>
        <p>Get an account and store passed races</p>
        <Link to='auth/register'>Register</Link>
      </div>
    </div>
  )
}

export default Authentication
