import React from 'react'
import {connect} from 'react-redux'

import LapInfo from './LapInfo/LapInfo'
import BackToMain from './BackToMain/BackToMain'

class Splits extends React.Component {
  render () {
    return (
      <div>
        <h2>Split Component</h2>
        <LapInfo info={this.props.lapInfo[0]} />
        {/* next lap / prev lap buttons */}
        <BackToMain />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    lapInfo: state.lapInfo || [2]
  }
}

export default connect(mapStateToProps)(Splits)
