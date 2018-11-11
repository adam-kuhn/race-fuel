import React from 'react'
import {connect} from 'react-redux'

import {registerUser} from '../../../actions/auth'

class Register extends React.Component {
  constructor () {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.props.dispatch(registerUser())
  }
  render () {
    return (
      <div>
        <p>Register comp</p>
        <button type='button' onClick={this.handleClick}>Register</button>
      </div>
    )
  }
}

export default connect()(Register)
