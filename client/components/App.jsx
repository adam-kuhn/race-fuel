import React from 'react'
import {connect} from 'react-redux'

import FuelList from './FuelList'
import LiveList from './LiveList'
import Lap from './Lap'
import Totals from './Totals'

import {showFuelList} from '../actions'

class App extends React.Component {
  constructor () {
    super()
    this.showFuelList = this.showFuelList.bind(this)
  }

  showFuelList () {
    this.props.dispatch(showFuelList())
  }
  render () {
    return (
      <div>
        <h2>Nutrition Tracker</h2>
        <button type='button' onClick={this.showFuelList}>Input Fuel</button>
        {this.props.showFuelList && <FuelList />}
        <LiveList />
        <Lap />
        <Totals />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    showFuelList: state.display.showFuelList
  }
}

export default connect(mapStateToProps)(App)
