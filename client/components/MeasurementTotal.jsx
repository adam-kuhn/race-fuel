import React from 'react'
import {connect} from 'react-redux'

const MeasurementTotal = (props) => {
  return (
    props.measurements.map(unit => {
      if (props.km && unit.name === 'distance') {
        return (
          <p className="card-text" key={unit.id}>{unit.totalTextKm} {unit.totalAmount}</p>
        )
      } else {
        return (
          <p className="card-text" key={unit.id}>{unit.totalTextMi || unit.totalText} {unit.totalAmount}</p>
        )
      }
    })
  )
}

const mapStateToProps = (state) => {
  return {
    measurements: state.distanceTime.measurements,
    km: state.display.km
  }
}

export default connect(mapStateToProps)(MeasurementTotal)
