import React from 'react'
import {connect} from 'react-redux'

import {nextLap} from '../actions'

class Lap extends React.Component {
  constructor () {
    super()
    this.state = {
      gu: 0,
      clifbar: 0,
      balls: 0,
      pbj: 0,
      calories: 0,
      water: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.submitLap = this.submitLap.bind(this)
  }

  handleChange (e) {
    const {gu, clifbar, balls, pbj} = this.state
    const guCal = gu * 100
    const clifCal = clifbar * 50
    const ballCal = balls * 23
    const pbjCal = pbj * 222
    let totalCal = 0
    if (e.target.name === 'gu') {
      totalCal = (e.target.value * 100) + clifCal + ballCal + pbjCal
    }
    if (e.target.name === 'clifbar') {
      totalCal = (e.target.value * 50) + guCal + ballCal + pbjCal
    }
    if (e.target.name === 'balls') {
      totalCal = (e.target.value * 23) + guCal + clifCal + pbjCal
    }
    if (e.target.name === 'pbj') {
      totalCal = (e.target.value * 222) + guCal + clifCal + ballCal
    }
    if (e.target.name === 'water') {
      totalCal = guCal + clifCal + ballCal + pbjCal
    }
    this.setState({
      [e.target.name]: Number(e.target.value),
      calories: totalCal
    })
  }

  submitLap () {
    this.props.dispatch(nextLap(this.props.lap, this.state))
    this.setState({
      gu: 0,
      clifbar: 0,
      balls: 0,
      pbj: 0,
      calories: 0,
      water: 0
    })
  }

  render () {
    return (
      <div>
        <h2>Lap {this.props.lap}</h2>
        <p>Need to eat ~200-300 calories per hour</p>
        <p>Values below are ~100 calories each</p>
        <ul>
          <li>Gu (1 gel)
            <input value={this.state.gu} name='gu' onChange={this.handleChange} data-cal={100} />
          </li>
          <li>ClifBar (1/2)
            <input value={this.state.clifbar} name='clifbar' onChange={this.handleChange} />
          </li>
          <li>Power Balls (2 balls)
            <input value={this.state.balls} name='balls' onChange={this.handleChange} />
          </li>
          <li>Peanut Butter and Jelly Sandwich (1/2)
            <input value={this.state.pbj} name='pbj' onChange={this.handleChange} />
          </li>
          <li>Water (mL)
            <input value={this.state.water} name='water' onChange={this.handleChange} />
          </li>
        </ul>
        <h3>Calories {this.state.calories}</h3>
        <button type='button' onClick={this.submitLap}>Next Lap</button>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    lap: state.lap
  }
}

export default connect(mapStateToProps)(Lap)
