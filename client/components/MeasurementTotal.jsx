import React from 'react'
import {connect} from 'react-redux'

const MeasurementTotal = (props) => {
  return (
    props.measurements.map(unit => {
      return (
        <p className="card-text" key={unit.id}>{unit.totalTextKm} {unit.totalAmount}</p>
      )
    })
  )
}

const mapStateToProps = (state) => {
  return state.distanceTime
}

export default connect(mapStateToProps)(MeasurementTotal)
