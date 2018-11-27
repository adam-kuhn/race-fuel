import React from 'react'
import {HashRouter as Router} from 'react-router-dom'

import Auth from './Auth/Auth'
import RouteLayout from '../Layout/RouteLayout'

const App = () => {
  return (
    <Router>
      <div>
        <div className='main-container'>
          <div className="center title">
            <h2>Race Fuel</h2>
          </div>
        </div>
        <RouteLayout />
        <Auth />
      </div>
    </Router>

  )
}

export default App
