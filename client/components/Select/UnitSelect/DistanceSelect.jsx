import React from 'react'
import {connect} from 'react-redux'

import {changeUnits} from '../../../actions'

class DistanceSelect extends React.Component {
  constructor () {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick (e) {
    const {dispatch, totalDistance, measurements} = this.props
    dispatch(changeUnits(JSON.parse(e.target.value),
      totalDistance, measurements))
  }

  render () {
    return (
      <div>
        <button type='button' value={this.props.km}
          onClick={this.handleClick}>
          {this.props.km ? 'miles' : 'kilometer'}</button>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    km: state.display.km,
    totalDistance: state.distanceTime.measurements[0].totalAmount,
    measurements: state.distanceTime.measurements
  }
}

export default connect(mapStateToProps)(DistanceSelect)
