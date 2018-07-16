import React from 'react'
import {connect} from 'react-redux'

import FuelList from './List/FuelList'
import LiveList from './List/LiveList'
import Lap from './Lap/Lap'
import Totals from './Totals/Totals'
import Select from './Select/Select'
import HomeBtn from './HomeBtn/HomeBtn'
import GoToSplits from './GoToSplits/GoToSplits'
import Splits from './Splits/Splits'

class App extends React.Component {
  render () {
    const {showSelect, showFuelList, showSplits} = this.props
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
        {showSplits && <Splits />}
        {!showSelect && <HomeBtn />}
        {!showSelect && <GoToSplits />}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    showFuelList: state.display.showFuelList,
    showSelect: state.display.showSelect,
    showSplits: state.display.showSplits
  }
}

export default connect(mapStateToProps)(App)
