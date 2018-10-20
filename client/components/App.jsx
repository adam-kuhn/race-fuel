import React from 'react'
import {connect} from 'react-redux'
import {HashRouter as Router, Route} from 'react-router-dom'

import Nav from './Nav/Nav'
import HomeBtn from './HomeBtn/HomeBtn'
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
          {this.props.live && this.props.nav && <Nav />}
          <Route exact path="/" component={LandingPage} />
          <Auth />
          <LiveApp />
          {this.props.live && <HomeBtn />}
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
