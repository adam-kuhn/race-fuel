import React from 'react'
import {connect} from 'react-redux'

import MeasurementTotal from './Measurements/MeasurementTotal'

class Totals extends React.Component {
  render () {
    return (
      <div className="card text-white bg-info mb-3">
        <h2 className="card-header">Totals!</h2>
        <div className="card-body">
          {this.props.fuelList.fuel.map(item => {
            if (item.name === 'water') {
              return (
                <p className="card-text" key={item.id}>{this.props.litre
                  ? item.text.waterL : item.text.waterMl} {item.totalAmount} </p>
              )
            }
            return (
              <p className="card-text" key={item.id}>
                {item.text} {item.totalAmount}</p>
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
    litre: state.display.litre
  }
}

export default connect(mapStateToProps)(Totals)