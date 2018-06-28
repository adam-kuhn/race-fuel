import React from 'react'
import {connect} from 'react-redux'

import MeasurementTotal from './MeasurementTotal'

class Totals extends React.Component {
  render () {
    return (
      <div className="card text-white bg-info mb-3">
        <h2 className="card-header">Totals!</h2>
        <div className="card-body">
          {this.props.fuelList.fuel.map(item => {
            return (
              <p className="card-text" key={item.id}>{item.totalText} {item.totalAmount}</p>
            )
          })}
          <MeasurementTotal />
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    fuelList: state.fuelList,
    measurements: state.distanceTime.measurements
  }
}

export default connect(mapStateToProps)(Totals)
