import React from 'react'
import {connect} from 'react-redux'
import {HashRouter as Router, Route} from 'react-router-dom'

import Nav from './Nav/Nav'
import HomeBtn from './HomeBtn/HomeBtn'
import FuelList from './List/FuelList'
import LiveList from './LiveList/LiveList'
import Lap from './Lap/Lap'
import Select from './Select/Select'
import Splits from './Splits/Splits'
import Totals from './Totals/Totals'

class App extends React.Component {
  render () {
    return (
      <Router>
        <div className='main-container'>
          <div className="center title">
            <h2>Nutrition Tracker</h2>
          </div>
          {this.props.live && this.props.nav && <Nav />}
          <Route exact path="/" component={Select} />
          <Route path="/AddFuel/:list" component={FuelList} />
          <Route path="/RemainingFuel" component={LiveList} />
          <Route path="/LapDetails" component={Lap} />
          <Route path="/Totals" component={Totals} />
          <Route path="/Splits" component={Splits} />
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
