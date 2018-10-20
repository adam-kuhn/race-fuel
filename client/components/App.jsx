import React from 'react'
import {connect} from 'react-redux'
import {HashRouter as Router, Route} from 'react-router-dom'

import LandingPage from './LandingPage/LandingPage'

import Auth from './Auth/Auth'
import LiveApp from './LiveApp/LiveApp'

class App extends React.Component {
  render () {
    return (
      <Router>
        <div className='main-container'>
          <div className="center title">
            <h2>Race Fuel</h2>
          </div>
          <Route exact path="/" component={LandingPage} />
          <Auth />
          <LiveApp />
        </div>
      </Router>

    )
  }
}

export default connect()(App)
