import React from 'react'
import {removeUser} from '../../utils/auth'

class LogOut extends React.Component {
  constructor () {
    super()
    this.handeClick = this.handleClick.bind(this)
  }
  handleClick () {
    removeUser()
  }
  render () {
    return (
      <button type='button' onClick={this.handleClick}>Log out</button>
    )
  }
}
export default LogOut
