import React from 'react'
import {connect} from 'react-redux'

function Measurements (props) {
  const {measure, km, lapState, change} = props
  return (
    measure.map(unit => {
      return (
        <p className="card-text" key={unit.id} id={unit.id}>
          {unit.name === 'distance' &&
        km ? unit.text
            : unit.textMi || unit.text}
          <input className="form-control" name={unit.name}
            value={lapState[unit.name] || ''} onChange={change}/>
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
