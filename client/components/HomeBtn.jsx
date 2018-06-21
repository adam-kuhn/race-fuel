import React from 'react'
import {connect} from 'react-redux'

import {goHome} from '../actions'

class HomeBtn extends React.Component {
  constructor () {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick () {
    this.props.dispatch(goHome(this.props.list))
  }
  render () {
    return (
      <div className="center">
        <button type='button' className="btn btn-danger" onClick={this.handleClick}>Start Over</button>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    list: state.fuelList.fuel
  }
}

export default connect(mapStateToProps)(HomeBtn)
