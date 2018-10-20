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

function mapStateToProps (state) {
  return {
    live: state.display.live,
    nav: state.display.nav
  }
}

export default connect(mapStateToProps)(App)
