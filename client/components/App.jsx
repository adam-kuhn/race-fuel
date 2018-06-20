import React from 'react'
import {connect} from 'react-redux'

import FuelList from './FuelList'
import LiveList from './LiveList'
import Lap from './Lap'
import Totals from './Totals'
import Select from './Select'
import HomeBtn from './HomeBtn'

class App extends React.Component {
  render () {
    return (
      <div>
        <h2>Nutrition Tracker</h2>
        {this.props.showSelect && <Select />}
        {!this.props.showSelect && this.props.showFuelList && <FuelList />}
        {!this.props.showSelect && !this.props.showFuelList && <LiveList />}
        {!this.props.showSelect && <Lap />}
        {!this.props.showSelect && <Totals />}
        {!this.props.showSelect && <HomeBtn />}
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
