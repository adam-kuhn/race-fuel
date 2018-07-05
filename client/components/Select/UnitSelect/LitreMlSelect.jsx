import React from 'react'
import {connect} from 'react-redux'

import {changeWater} from '../../../actions'

class LitreMlSelect extends React.Component {
  constructor () {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick (e) {
    const {dispatch, fuel} = this.props
    const waterLeft = fuel[1].amount
    const waterTotal = fuel[1].totalAmount
    dispatch(changeWater(JSON.parse(e.target.value),
      fuel, waterTotal,
      waterLeft))
  }
  render () {
    return (
      <div>
        <p>Water units <button type="button" onClick={this.handleClick}
          value={this.props.litre}>
          {this.props.litre ? 'mL' : 'L' }</button>
        </p>
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
