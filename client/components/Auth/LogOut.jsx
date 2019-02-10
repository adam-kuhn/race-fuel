import React from 'react'
import {connect} from 'react-redux'
import {removeUser} from '../../utils/auth'
import {logOut} from '../../actions/auth'

class LogOut extends React.Component {
  constructor () {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick () {
    this.props.dispatch(logOut())
    removeUser()
  }
  render () {
    return (
      <button type='button' onClick={this.handleClick}>Log out</button>
    )
  }
}
export default connect()(LogOut)
