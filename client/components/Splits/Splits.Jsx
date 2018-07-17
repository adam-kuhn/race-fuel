import React from 'react'
import {connect} from 'react-redux'

import LapInfo from './LapInfo/LapInfo'
import BackToMain from './BackToMain/BackToMain'
import SplitNav from './SplitNav/SplitNav'

class Splits extends React.Component {
  constructor () {
    super()
    this.state = {
      lapIndex: 0,
      errorMessage: ''
    }
    this.handleSplitNav = this.handleSplitNav.bind(this)
  }

  handleSplitNav (e) {
    const delta = Number(e.target.value)
    const currentLap = this.state.lapIndex
    switch (delta) {
      case (-1):
        if (currentLap === 0 && delta === -1) {
          this.setState({
            errorMessage: 'This is the first lap.'
          })
        } else {
          this.setState({
            lapIndex: currentLap + delta,
            errorMessage: ''
          })
        }
        break
      case (1):
        if (currentLap + 1 === this.props.lapInfo.length) {
          this.setState({
            errorMessage: 'This is the first lap.'
          })
        } else {
          this.setState({
            lapIndex: currentLap + 1,
            errorMessage: ''
          })
        }
    }
  }
  render () {
    return (
      <div>
        <h2>Split Component</h2>
        <LapInfo info={this.props.lapInfo[this.state.lapIndex]} />
        <SplitNav
          errorMsg={this.state.errorMessage}
          nav={this.handleSplitNav}/>
        <BackToMain />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    lapInfo: state.splits.lapInfo
  }
}

export default connect(mapStateToProps)(Splits)
