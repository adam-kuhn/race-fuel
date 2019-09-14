import React from 'react'
import {connect} from 'react-redux'

import UserDetails from '../../UserDetails/UserDetail'

import {registerUser, clearRegisterUserErrorMessage} from '../../../actions/auth'

class Register extends React.Component {
  constructor () {
    super()
    this.submitUserInfoForRegistration = this.submitUserInfoForRegistration.bind(this)
  }

  componentDidMount () {
    this.props.dispatch((clearRegisterUserErrorMessage()))
  }

  submitUserInfoForRegistration (userInfo) {
    this.props.dispatch(registerUser(userInfo))
  }
  render () {
    return (
      <div>
        <p>Register comp</p>
        <UserDetails submitUserInfo={this.submitUserInfoForRegistration} submitType="Register" />
        {this.props.error && <p>Sorry but this user already exists</p>}
      </div>
    )
  }
}

const mapStateToProps = ({auth}) => ({error: auth.error})
export default connect(mapStateToProps)(Register)
