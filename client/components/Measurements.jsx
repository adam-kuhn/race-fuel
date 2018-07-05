import React from 'react'
import {connect} from 'react-redux'

import LapDistance from './LapDistance'
import LapTime from './LapTime'
function Measurements (props) {
  const {measure, km, lapState, change} = props
  return (
    measure.map(unit => {
      if (unit.name === 'distance') {
        return (
          <LapDistance key={unit.id}
            text={unit.text} name={unit.name}
            value={lapState[unit.name] || ''}
            change={change} km={km} />
        )
      } else {
        return (
          <LapTime key={unit.id}
            text={unit.text} name={unit.name}
            value={lapState[unit.name] || ''}
            change={change}/>
        )
      }
    })
  )
}

const mapStateTopProps = (state) => {
  return {
    measure: state.distanceTime.measurements,
    km: state.display.km
  }
}

export default connect(mapStateTopProps)(Measurements)
