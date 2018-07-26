import React from 'react'
import {connect} from 'react-redux'

import Navigator from './Navigator/Navigator'
import FuelList from './List/FuelList'
import Select from './Select/Select'
import Main from './Main/Main'
// import HomeBtn from './HomeBtn/HomeBtn'
import Splits from './Splits/Splits'

class App extends React.Component {
  render () {
    const {showSelect, showEditList, showMain, showSplits} = this.props
    return (
      <div>
        <div className="center title">
          <h2>Nutrition Tracker</h2>
        </div>
        {!showSelect && <Navigator />}
        {showSelect && <Select />}
        {showEditList && <FuelList />}
        {showMain && <Main />}
        {showSplits && <Splits />}
        {/* {!showSelect && <HomeBtn />} */}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    showEditList: state.display.showEditList,
    showMain: state.display.showMain,
    showSelect: state.display.showSelect,
    showSplits: state.display.showSplits
  }
}

export default connect(mapStateToProps)(App)
