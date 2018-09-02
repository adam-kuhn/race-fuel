import React from 'react'
import {connect} from 'react-redux'
// import {Route} from 'react-router-dom'
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
    const {showSelect, showEditList, showList,
      showLap, showTotals, showSplits, showNav} = this.props
    return (
      <Router>
        <div>
          <div className="center title">
            <h2>Nutrition Tracker</h2>
          </div>
          <Route exact path="/" component={Select} />
          <Route path="/AddFuel/:list" component={FuelList} />
          <Route path='/RemainingFuel' component={LiveList} />

          {/* {showSelect && <Select />} */}
          {showNav && <Nav />}
          {/* {showEditList && <FuelList />} */}
          {showList && <LiveList />}
          {showLap && <Lap />}
          {showSplits && <Splits />}
          {showTotals && <Totals />}
          {!showSelect && <HomeBtn />}
        </div>
      </Router>

    )
  }
}

function mapStateToProps (state) {
  return {
    showNav: state.display.showNav,
    showEditList: state.display.showEditList,
    showList: state.display.showList,
    showSelect: state.display.showSelect,
    showSplits: state.display.showSplits,
    showLap: state.display.showLap,
    showTotals: state.display.showTotals
  }
}

export default connect(mapStateToProps)(App)
