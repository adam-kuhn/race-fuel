import React from 'react'
import {HashRouter as Router} from 'react-router-dom'

import LogOut from './Auth/LogOut/LogOut'
import RouteLayout from '../Layout/RouteLayout'

const App = (props) => {
  return (
    <Router>
      <div>
        <div className='main-container'>
          <div className="center title">
            <h2>Race Fuel</h2>
          </div>
        </div>
        <RouteLayout />
        <LogOut />
      </div>
    </Router>

  )
}

export default App
