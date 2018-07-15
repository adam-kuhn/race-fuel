import React from 'react'
import {connect} from 'react-redux'

import {showSplits} from '../../actions'

class GoToSplits extends React.Component {
  constructor () {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick () {
    this.props.dispatch(showSplits())
  }
  render () {
    return (
      <div className="center">
        <button type='button' className="btn btn-danger"
          onClick={this.handleClick}>View Splits</button>
      </div>
    )
  }
}

export default connect()(GoToSplits)
