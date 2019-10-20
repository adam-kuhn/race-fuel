import React from 'react'
import {connect} from 'react-redux'
import UserDetails from '../../UserDetails/UserDetail'
import {requestLogin, clearErrorMessage} from '../../../actions/auth'

class Login extends React.Component {
  constructor () {
    super()
    this.submitUserInfoForLogin = this.submitUserInfoForLogin.bind(this)
  }

  componentDidMount () {
    this.props.dispatch((clearErrorMessage()))
  }

  submitUserInfoForLogin (userInfo) {
    this.props.dispatch(requestLogin(userInfo))
  }
  render () {
    return (
      <div>
        <p>Login Component</p>
        <UserDetails submitUserInfo={this.submitUserInfoForLogin} submitType="Login" />
        {this.props.error && <p>Whoops, Username and Password do not match.</p>}
      </div>
    )
  }
}

const mapStateToProps = ({auth}) => ({error: auth.error})
export default connect(mapStateToProps)(Login)
