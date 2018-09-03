import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {standard, custom} from '../../actions/select'

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
        <Link to='/AddFuel/Custom'>
          <button type='button' className="btn btn-primary btn-select"
            onClick={this.custom}>Custom List</button>
        </Link>
        <Link to='/AddFuel/Standard'>
          <button type='button' className="btn btn-primary btn-select"
            onClick={this.standard}>Standard List</button>
        </Link>
      </div>
    )
  }
}

export default connect()(Select)
