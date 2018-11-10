import React from 'react'
import {connect} from 'react-redux'
import request from 'superagent'

import {changeUnits} from '../../../../actions/toggle'

class DistanceSelect extends React.Component {
  constructor () {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount () {
    console.log('eb')
    request
      .post('/api/v1/auth')
      .set('Content-Type', 'application/json')
      .send({username: 'test-user'})
      .then(res => console.log(res.body.message))
      .catch(err => console.log('caught', err.response.body.message))
  }
  handleClick (e) {
    const {dispatch, totalDistance, measurements, updateKm} = this.props
    const val = JSON.parse(e.target.value)
    if (updateKm) {
      updateKm(val)
    }
    dispatch(changeUnits(val,
      totalDistance, measurements))
  }

  render () {
    return (
      <div>
        <button className='btn btn-toggle' type='button' value={this.props.km}
          onClick={this.handleClick}>
          {this.props.km ? 'miles' : 'kilometer'}</button>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    km: state.display.km,
    totalDistance: state.distanceTime.measurements[0].totalAmount,
    measurements: state.distanceTime.measurements
  }
}

export default connect(mapStateToProps)(DistanceSelect)
