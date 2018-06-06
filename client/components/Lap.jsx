import React from 'react'
import {connect} from 'react-redux'

import {nextLap} from '../actions'

class Lap extends React.Component {
  constructor () {
    super()
    this.state = {
      calories: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.submitLap = this.submitLap.bind(this)
  }
  handleChange (e) {
    const difference = e.target.value - (this.state[e.target.name] || 0)
    const itemCalories = e.target.getAttribute('data-cal')
    const caloriesEaten = ((itemCalories * difference) + this.state.calories)
    this.setState({
      ...this.state,
      [e.target.name]: Number(e.target.value),
      calories: caloriesEaten
    })
  }

  submitLap () {
    this.props.dispatch(nextLap(this.props.lap, this.state))
    const items = this.props.lapFuel.map(item => {
      return item.name
    })
    for (let fuel of items) {
      this.setState({
        calories: 0,
        [fuel]: 0
      })
    }
  }

  render () {
    return (
      <div>
        <h2>Lap {this.props.lap}</h2>
        <p>Need to eat ~200-400 calories per hour</p>
        <p>Input servings eaten</p>
        <ul>
          {this.props.lapFuel.map(item => {
            if (item.id !== 1) {
              return (
                <li key={item.id}>{item.lapText}
                  <input value={this.state[item.name] || 0} name={item.name}
                    onChange={this.handleChange} data-cal={item.itemCalories}/>
                </li>
              )
            }
          })}

        </ul>
        <h3>Calories {this.state.calories}</h3>
        <button type='button' onClick={this.submitLap}>Next Lap</button>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    lap: state.fuelList.lap,
    lapFuel: state.fuelList.fuel
  }
}

export default connect(mapStateToProps)(Lap)
