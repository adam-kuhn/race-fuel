import React from 'react'
import {connect} from 'react-redux'

import {changeWater} from '../../../actions/toggle'

class LitreMlSelect extends React.Component {
  constructor () {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick (e) {
    const {dispatch, fuel, updateWater} = this.props
    const val = JSON.parse(e.target.value)
    const waterLeft = fuel[1].amount
    const waterTotal = fuel[1].totalAmount
    if (updateWater) {
      updateWater(!val)
    }
    dispatch(changeWater(val,
      fuel, waterTotal,
      waterLeft))
  }
  render () {
    return (
      <div>
        <button className='btn btn-toggle' type="button" onClick={this.handleClick}
          value={this.props.litre}>
          {this.props.litre ? 'mL' : 'L' }
        </button>
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
