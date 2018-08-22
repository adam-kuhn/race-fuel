import React from 'react'
import {connect} from 'react-redux'

import Nav from './Nav/Nav'
import HomeBtn from './HomeBtn/HomeBtn'
import FuelList from './List/FuelList'
import LiveList from './LiveList/LiveList'
import Lap from './Lap/Lap'
import Select from './Select/Select'
import Splits from './Splits/Splits'
import Totals from './Totals/Totals'

import {Doughnut} from 'react-chartjs-2'

class App extends React.Component {
  render () {
    const {showSelect, showEditList, showList,
      showLap, showTotals, showSplits, showNav} = this.props
    return (
      <div>
        <div className="center title">
          <h2>Nutrition Tracker</h2>
          <Doughnut data={{labels: ['choc', 'van', 'pln'],
            datasets: [{
              label: 'doughnut label',
              data: [1, 2, 3, 4, 5, 4, 3, 2, 1, 20]
            }]
          }} width={100} height={50}/>
        </div>
        {showNav && <Nav />}
        {showSelect && <Select />}
        {showEditList && <FuelList />}
        {showList && <LiveList />}
        {showLap && <Lap />}
        {showSplits && <Splits />}
        {showTotals && <Totals />}
        {!showSelect && <HomeBtn />}
      </div>
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
