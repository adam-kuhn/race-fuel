import React from 'react'
import {connect} from 'react-redux'

const MeasurementTotal = (props) => {
  return (
    props.measurements.map(unit => {
      if (props.km && unit.name === 'distance') {
        return (
          <p className="card-text" key={unit.id}>{unit.text} {unit.totalAmount}</p>
        )
      } else {
        return (
          <p className="card-text" key={unit.id}>{unit.textMi ||
            unit.text} {unit.totalAmount}</p>
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
