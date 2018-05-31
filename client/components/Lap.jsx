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
      calories: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.submitLap = this.submitLap.bind(this)
  }

  handleChange (e) {
    const {gu, clifbar, balls, pbj} = this.state
    const amountSelected = gu + clifbar + balls + pbj
    const previousCal = this.state.calories
    // let updateCal = 0
    // if (e.target.name === 'gu') {
    //   updateCal += (e.target.value * 100)
    // }
    // if (e.target.name === 'clifbar') {
    //   updateCal += (e.target.value * 50)
    // }
    // if (e.target.name === 'balls') {
    //   updateCal += (e.target.value * 23)
    // }
    const itemsCal = e.target.getAttribute('data-cal')
    const calories = itemsCal * e.target.value
    this.setState({
      [e.target.name]: Number(e.target.value),
      calories: previousCal + calories
    })
  }

  submitLap () {
    this.props.dispatch(nextLap(this.props.lap, this.state))
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
