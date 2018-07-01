import React from 'react'
import {connect} from 'react-redux'

import {changeWater} from '../actions'

class LitreMlSelect extends React.Component {
  constructor () {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick (e) {
    this.props.dispatch(changeWater(JSON.parse(e.target.value),
      this.props.fuel, this.props.fuel[1].totalAmount,
      this.props.fuel[1].amount))
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
    fuel: state.fuelList.fuel
  }
}

export default connect(mapStateToProps)(LitreMlSelect)
