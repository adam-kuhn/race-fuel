import React from 'react'
import {connect} from 'react-redux'

import DistanceTotal from './DistanceTotal'
import TimeTotal from './TimeTotal'

const MeasurementTotal = (props) => {
  return (
    props.measurements.map(unit => {
      if (unit.name === 'distance') {
        return (
          <DistanceTotal key={unit.id}
            text={unit.text} textMi={unit.textMi}
            total={unit.totalAmount}
            km={props.km} />
        )
      } else {
        return (
          <TimeTotal key={unit.id}
            text={unit.text}
            total={unit.totalAmount}
          />
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
