import React from 'react'
import {connect} from 'react-redux'

import Nav from './Nav/Nav'
import FuelList from './List/FuelList'
import LiveList from './LiveList/LiveList'
import Lap from './Lap/Lap'
import Select from './Select/Select'
import Splits from './Splits/Splits'

class App extends React.Component {
  render () {
    const {showSelect, showEditList, showList,
      showLap,
      showSplits} = this.props
    return (
      <div>
        <div className="center title">
          <h2>Nutrition Tracker</h2>
        </div>
        {!showSelect && <Nav />}
        {showSelect && <Select />}
        {showEditList && <FuelList />}
        {showList && <LiveList />}
        {showLap && <Lap />}
        {showSplits && <Splits />}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    showEditList: state.display.showEditList,
    showList: state.display.showList,
    showSelect: state.display.showSelect,
    showSplits: state.display.showSplits,
    showLap: state.display.showLap
  }
}

export default connect(mapStateToProps)(App)
