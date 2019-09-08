import React from 'react'
import {connect} from 'react-redux'
import UserDetails from '../../UserDetails/UserDetail'
import {requestLogin} from '../../../actions/auth'

class Login extends React.Component {
  constructor () {
    super()
    this.submitUserInfoForLogin = this.submitUserInfoForLogin.bind(this)
  }

  submitUserInfoForLogin (userInfo) {
    this.props.dispatch(requestLogin(userInfo))
  }
  render () {
    return (
      <div>
        <p>Login Component</p>
        <UserDetails submitUserInfo={this.submitUserInfoForLogin} submitType="Login" />
      </div>
    )
  }
}

export default connect()(Login)
