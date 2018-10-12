import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Login from '../Login/Login'
const Auth = () => {
  return (
    <Router>
      <Route path='/auth/login' component={Login} />
    </Router>
  )
}

export default Auth
