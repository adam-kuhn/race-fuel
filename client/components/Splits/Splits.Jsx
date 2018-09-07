import React from 'react'
import {connect} from 'react-redux'

import LapInfo from './LapInfo/LapInfo'
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
    if (delta === -1) {
      if (currentLap === 0) {
        this.setState({
          errorMessage: 'This is the first lap.'
        })
      } else {
        this.setState({
          lapIndex: currentLap + delta,
          errorMessage: ''
        })
      }
    } else {
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
  }
  render () {
    return (
      <div className='card width text-white bg-info mb-3'>
        <div className='card-header'>
          <h2>Split Component</h2>
        </div>
        <div className='card-body general-body'>
          <div className='center'>
            <LapInfo info={this.props.lapInfo[this.state.lapIndex]} />
          </div>
          <SplitNav
            errorMsg={this.state.errorMessage}
            nav={this.handleSplitNav}/>
        </div>
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
