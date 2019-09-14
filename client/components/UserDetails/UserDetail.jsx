import React from 'react'

class UserDetails extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      usernameInputError: false,
      passwordInputError: false
    }
    this.handlePasswordInputChange = this.handlePasswordInputChange.bind(this)
    this.handleUsernameInputChange = this.handleUsernameInputChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleUsernameInputChange (e) {
    // TODO: handle input error backend too
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
    this.props.submitUserInfo(this.state)
  }
  render () {
    const {passwordInputError, usernameInputError} = this.state
    return (
      <div>
        <div>
          <label>Username: </label>
          <input name='username' type="text" onChange={this.handleUsernameInputChange}/>
          {usernameInputError && <p>Input Error! Please no special characters or spaces</p>}
          <label>Password:</label>
          <input name='password' type="text" onChange={this.handlePasswordInputChange}/>
          {passwordInputError && <p>Input Error! Invalid character.</p>}
        </div>
        <button onClick={this.handleClick} disabled={passwordInputError || usernameInputError}>
          {this.props.submitType}
        </button>
      </div>
    )
  }
}

export default UserDetails
