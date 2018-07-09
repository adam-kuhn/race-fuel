import React from 'react'
import {connect} from 'react-redux'

import FuelList from './List/FuelList'
import LiveList from './List/LiveList'
import Lap from './Lap/Lap'
import Totals from './Totals/Totals'
import Select from './Select/Select'
import HomeBtn from './HomeBtn/HomeBtn'

class App extends React.Component {
  render () {
    const {showSelect, showFuelList} = this.props
    return (
      <div>
        <div className="center title">
          <h2>Nutrition Tracker</h2>
        </div>
        {showSelect && <Select />}
        {!showSelect && showFuelList && <FuelList />}
        {!showSelect && !showFuelList && <LiveList />}
        {!showSelect && !showFuelList && <Lap />}
        {!showSelect && !showFuelList && <Totals />}
        {!showSelect && <HomeBtn />}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    showFuelList: state.display.showFuelList,
    showSelect: state.display.showSelect
  }
}

export default connect(mapStateToProps)(App)
