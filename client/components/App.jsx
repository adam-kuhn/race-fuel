import React from 'react'
import {HashRouter as Router} from 'react-router-dom'
import {connect} from 'react-redux'

import LogOut from './Auth/LogOut/LogOut'
import RouteLayout from '../Layout/RouteLayout'

const App = (props) => {
  const subTitle = props.username ? props.username : 'Guest User'
  return (
    <Router>
      <div>
        <div className='main-container'>
          <div className="center title">
            <h2>Race Fuel</h2>
            <h5>{subTitle}</h5>
          </div>
        </div>
        <RouteLayout />
        <LogOut />
      </div>
    </Router>

  )
}

const mapStateToProps = (state) => ({username: state.auth.userInfo.username})

export default connect(mapStateToProps)(App)
