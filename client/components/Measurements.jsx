import React from 'react'
import {connect} from 'react-redux'

function Measurements (props) {
  return (
    props.measure.map(unit => {
      return (
        <p className="card-text" key={unit.id} id={unit.id}>{unit.name === 'distance' &&
        props.km ? unit.lapTextKm
          : unit.lapTextMi || unit.lapText}
        <input className="form-control" name={unit.name} value={props.lapState[unit.name] || 0} onChange={props.change}/>
        </p>
      )
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
