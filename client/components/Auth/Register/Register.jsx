import React from 'react'
import {connect} from 'react-redux'

import {registerUser} from '../../../actions/auth'

class Register extends React.Component {
  constructor () {
    super()
    this.state = {
      username: '',
      password: ''
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick () {
    this.props.dispatch(registerUser(this.state))
  }
  render () {
    return (
      <div>
        <p>Register comp</p>
        <label>Username:</label>
        <input name='username' type="text" onChange={this.handleChange}/>
        <label>Password:</label>
        <input name='password' type="text" onChange={this.handleChange}/>
        <button type='submit' onClick={this.handleClick}>Register</button>
      </div>
    )
  }
}

export default connect()(Register)
