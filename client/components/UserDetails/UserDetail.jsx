import React from 'react'

class UserDetails extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
      usernameInputError: false,
      passwordInputError: false,
      confirmPasswordError: false
    }
    this.handlePasswordInputChange = this.handlePasswordInputChange.bind(this)
    this.handleUsernameInputChange = this.handleUsernameInputChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleConfirmPasswordInputChange = this.handleConfirmPasswordInputChange.bind(this)
  }

  handleUsernameInputChange (e) {
    if (e.target.value.match(/[^A-Za-z0-9-_]+/g)) {
      this.setState({
        usernameInputError: true
      })
    } else {
      this.setState({
        usernameInputError: false
      })
    }
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handlePasswordInputChange (e) {
    if (e.target.value.match(/[<>]+/g) || e.target.value.indexOf('%3') >= 0) {
      this.setState({
        passwordInputError: true
      })
    } else {
      this.setState({
        passwordInputError: false
      })
    }
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleClick () {
    if (this.props.submitType === 'Register') {
      if (this.state.password === this.state.confirmPassword) {
        this.props.submitUserInfo(this.state)
        this.setState({
          confirmPasswordError: false
        })
      } else {
        this.setState({
          confirmPasswordError: true
        })
      }
    } else {
      this.props.submitUserInfo(this.state)
    }
  }
  handleConfirmPasswordInputChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render () {
    const {passwordInputError, usernameInputError, confirmPasswordError} = this.state
    const {submitType} = this.props
    return (
      <div>
        <div>
          <label>Username: </label>
          <input name='username' type="text" onChange={this.handleUsernameInputChange}/>
          {usernameInputError && <p>Input Error! Please no special characters or spaces</p>}
          <label>Password:</label>
          <input name='password' type="text" onChange={this.handlePasswordInputChange}/>
          {passwordInputError && <p>Input Error! Invalid character.</p>}
          <label htmlFor='confrim-password'>Confirm Password</label>
          {submitType === 'Register' &&
          <div>
            <input name='confirmPassword' type="text" onChange={this.handleConfirmPasswordInputChange}/>
            {confirmPasswordError && <p>Passwords do not match</p>}
          </div>}
        </div>
        <button onClick={this.handleClick} disabled={passwordInputError || usernameInputError}>
          {submitType}
        </button>
      </div>
    )
  }
}

export default UserDetails
