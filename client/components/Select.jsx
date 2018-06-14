import React from 'react'
import {connect} from 'react-redux'

import {standard} from '../actions'

class Select extends React.Component {
  constructor () {
    super()
    this.custom = this.custom.bind(this)
    this.standard = this.standard.bind(this)
  }
  custom () {
    this.props.dispatch()
  }
  standard () {
    this.props.dispatch(standard())
  }
  render () {
    return (
      <div>
        <button type='button' onClick={this.custom}>Custom List</button>
        <button type='button' onClick={this.standard}>Standard List</button>
      </div>
    )
  }
}

export default connect()(Select)
