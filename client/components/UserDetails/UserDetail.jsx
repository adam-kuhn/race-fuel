import React from 'react'

class UserDetails extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleClick () {
    this.props.submitUserInfo(this.state)
  }
  render () {
    return (
      <div>
        <label>Username: </label>
        <input name='username' type="text" onChange={this.handleChange}/>
        <label>Password:</label>
        <input name='password' type="text" onChange={this.handleChange}/>
        <button onClick={this.handleClick}>{this.props.submitType}</button>
      </div>
    )
  }
}

export default UserDetails
