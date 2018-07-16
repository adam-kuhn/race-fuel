import React from 'react'
import {connect} from 'react-redux'

import {backToMain} from '../../../actions'

class BackToMain extends React.Component {
  constructor () {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick () {
    this.props.dispatch(backToMain())
  }
  render () {
    return (
      <button type='button'
        onClick={this.handleClick}>
        Back to Fuel
      </button>
    )
  }
}

export default connect()(BackToMain)
