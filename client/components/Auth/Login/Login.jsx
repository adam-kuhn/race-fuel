import React from 'react'
import {connect} from 'react-redux'
import {requestLogin} from '../../../actions/auth'

class Login extends React.Component {
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
    this.props.dispatch(requestLogin(this.state))
    console.log(this.state)
  }
  render () {
    return (
      <div>
        <label>Username: <input name='username' type="text" onChange={this.handleChange}/></label>
        <label>Password: <input name='password' type="text" onChange={this.handleChange}/></label>
        <button onClick={this.handleClick}>Login</button>
      </div>
    )
  }
}

export default connect()(Login)
