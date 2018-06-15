import React from 'react'
import {connect} from 'react-redux'

import {goHome} from '../actions'

class HomeBtn extends React.Component {
  constructor () {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick () {
    this.props.dispatch(goHome())
  }
  render () {
    return (
      <button type='button' onClick={this.handleClick}>Start Over</button>
    )
  }
}

export default connect()(HomeBtn)
