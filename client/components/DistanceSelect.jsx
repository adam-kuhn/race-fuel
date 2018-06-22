import React from 'react'
import {connect} from 'react-redux'

import {changeUnits} from '../actions'

class DistanceSelect extends React.Component {
  constructor () {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick (e) {
    this.props.dispatch(changeUnits(JSON.parse(e.target.value)))
  }

  render () {
    return (
      <div>
        <button type='button' value={this.props.km}
          onClick={this.handleClick}>{this.props.km ? 'miles' : 'kilometer'}</button>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    km: state.display.km
  }
}

export default connect(mapStateToProps)(DistanceSelect)
