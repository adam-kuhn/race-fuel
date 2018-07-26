import React from 'react'
import {connect} from 'react-redux'

import {showSplits} from '../../../actions'

class GoToSplits extends React.Component {
  // constructor () {
  //   super()
  //   this.handleClick = this.handleClick.bind(this)
  // }
  // handleClick () {
  //   this.props.dispatch(showSplits())
  // }
  render () {
    return (
      <div className="center">
        <button type='button' className="btn btn-danger"
          onClick={this.props.click}
          value="SPLITS"
          disabled={this.props.disableSplit}>View Splits</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    disableSplit: state.display.disableSplitButton
  }
}

export default connect(mapStateToProps)(GoToSplits)
