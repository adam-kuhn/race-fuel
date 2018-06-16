import React from 'react'
import {connect} from 'react-redux'

import FuelList from './FuelList'
import LiveList from './LiveList'
import Lap from './Lap'
import Totals from './Totals'
import Select from './Select'
import HomeBtn from './HomeBtn'

import {showFuelList} from '../actions'

class App extends React.Component {
  constructor () {
    super()
    this.editFuelList = this.editFuelList.bind(this)
  }

  editFuelList () {
    this.props.dispatch(showFuelList())
  }
  render () {
    return (
      <div>
        <h2>Nutrition Tracker</h2>
        {this.props.showSelect && <Select />}
        {!this.props.showSelect && <HomeBtn />}
        {!this.props.showSelect && !this.props.showFuelList &&
        <button type='button' onClick={this.editFuelList}>Edit Fuel List</button>}
        {!this.props.showSelect && this.props.showFuelList && <FuelList />}
        {!this.props.showSelect && !this.props.showFuelList && <LiveList />}
        {!this.props.showSelect && <Lap />}
        {!this.props.showSelect && <Totals />}
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
