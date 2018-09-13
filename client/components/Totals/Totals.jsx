import React from 'react'
import {connect} from 'react-redux'

import LitreMlSelect from '../Select/UnitSelect/LitreMlSelect'
import DistanceSelect from '../Select/UnitSelect/DistanceSelect'
import MeasurementTotal from './Measurements/MeasurementTotal'

class Totals extends React.Component {
  render () {
    return (
      <div className="card width text-white bg-info mb-3">
        <h2 className="card-header">Totals!</h2>
        <div className='toggle card-header'>
          <h4>Units</h4>
          <LitreMlSelect />
          <DistanceSelect />
        </div>
        <div className="card-body general-body">
          {this.props.fuelList.fuel.map(item => {
            return (
              <div className='list-item card-text' key={item.id}>
                <p>{this.props.litre ? item.text.waterL || item.text
                  : item.text.waterMl || item.text}: </p>
                <p>{item.totalAmount}</p>
              </div>
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
