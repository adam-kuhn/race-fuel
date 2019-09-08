import React from 'react'
import {connect} from 'react-redux'

import UserDetails from '../../UserDetails/UserDetail'

import {registerUser} from '../../../actions/auth'

class Register extends React.Component {
  constructor () {
    super()
    this.submitUserInfoForRegistration = this.submitUserInfoForRegistration.bind(this)
  }

  submitUserInfoForRegistration (userInfo) {
    this.props.dispatch(registerUser(userInfo))
  }
  render () {
    return (
      <div>
        <p>Register comp</p>
        <UserDetails submitUserInfo={this.submitUserInfoForRegistration} submitType="Register" />
      </div>
    )
  }
}

export default connect()(Register)
