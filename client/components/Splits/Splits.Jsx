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
    this.handleNext = this.handleNext.bind(this)
    this.handlePrevious = this.handlePrevious.bind(this)
  }
  handleNext () {
    const currentLap = this.state.lapIndex
    if (currentLap + 1 === this.props.lapInfo.length) {
      this.setState({
        errorMessage: 'This is the last lap.'
      })
    } else {
      this.setState({
        lapIndex: currentLap + 1,
        errorMessage: ''
      })
    }
  }
  handlePrevious () {
    const currentLap = this.state.lapIndex
    if (currentLap - 1 < 0) {
      this.setState({
        errorMessage: 'This is the first lap.'
      })
    } else {
      this.setState({
        lapIndex: currentLap - 1,
        errorMessage: ''
      })
    }
  }
  render () {
    return (
      <div>
        <h2>Split Component</h2>
        <LapInfo info={this.props.lapInfo[this.state.lapIndex]} />
        <SplitNav
          errorMsg={this.state.errorMessage}
          next={this.handleNext}
          previous={this.handlePrevious}/>
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
