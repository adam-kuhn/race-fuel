import React from 'react'
import {Route} from 'react-router-dom'

import Login from './Login/Login'
import Register from './Register/Register'

const Auth = () => {
  return (
    <div className='main-container'>
      <Route path='/auth/login' component={Login} />
      <Route path='/auth/register' component={Register} />
    </div>
  )
}

export default Auth
