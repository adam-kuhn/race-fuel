import React from 'react'
import {connect} from 'react-redux'

import {changeWater} from '../actions'

class LitreMlSelect extends React.Component {
  constructor () {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick (e) {
    this.props.dispatch(changeWater(JSON.parse(e.target.value)), this.props.water)
  }
  render () {
    return (
      <div>
        <p>Water units</p>
        <button type="button" onClick={this.handleClick} value={this.props.litre}>
          {this.props.litre ? 'mL' : 'L' }</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    litre: state.display.litre,
    water: state.fuelList.fuel[6]
  }
}

export default connect(mapStateToProps)(LitreMlSelect)
