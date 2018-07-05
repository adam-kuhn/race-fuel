import React from 'react'
import {connect} from 'react-redux'

import {standard, custom} from '../../actions'

class Select extends React.Component {
  constructor () {
    super()
    this.custom = this.custom.bind(this)
    this.standard = this.standard.bind(this)
  }
  custom () {
    this.props.dispatch(custom())
  }
  standard () {
    this.props.dispatch(standard())
  }
  render () {
    return (
      <div className="center">
        <button type='button' className="btn btn-primary btn-select"
          onClick={this.custom}>Custom List</button>
        <button type='button' className="btn btn-primary btn-select"
          onClick={this.standard}>Standard List</button>
      </div>
    )
  }
}

export default connect()(Select)