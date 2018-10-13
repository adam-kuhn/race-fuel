import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Login from './Login/Login'
import Register from './Register/Register'
import Authentication from './Authentication/Authentication'
const Auth = () => {
  return (
    <Router>
      <div>
        <Route path='/auth/login' component={Login} />
        <Route path='/auth/register' component={Register} />
        <Authentication />
      </div>
    </Router>
  )
}

export default Auth
