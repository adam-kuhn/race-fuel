import React from 'react'
import {connect} from 'react-redux'

import {changeWater} from '../actions'

class LitreMlSelect extends React.Component {
  constructor () {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick (e) {
    this.props.dispatch(changeWater(JSON.parse(e.target.value)))
  }
  render () {
    return (
      <div>
        <p>Water units</p>
        <button type="button" onClick={this.handleClick} value={this.props.litre}>
          {this.props.litre ? 'L' : 'mL' }</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    litre: state.display.litre
  }
}

export default connect(mapStateToProps)(LitreMlSelect)
