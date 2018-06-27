import React from 'react'
import {connect} from 'react-redux'
import DistanceSelect from './DistanceSelect'
import Measurements from './Measurements'

import {nextLap} from '../actions'

class Lap extends React.Component {
  constructor () {
    super()
    this.state = {
      calories: 0,
      wrongInput: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.submitLap = this.submitLap.bind(this)
  }
  handleChange (e) {
    const newValue = Number(e.target.value)
    const itemCalories = e.target.getAttribute('data-cal')
    if (!(newValue + 1)) {
      const lowerCals = this.state.calories - (this.state[e.target.name] * itemCalories)
      this.setState({
        [e.target.name]: 0,
        calories: lowerCals || 0,
        wrongInput: true
      })
    } else {
      const difference = e.target.value - (this.state[e.target.name] || 0)
      const caloriesEaten = ((itemCalories * difference) + this.state.calories)
      this.setState({
        ...this.state,
        [e.target.name]: newValue,
        calories: caloriesEaten,
        wrongInput: false
      })
    }
  }

  submitLap () {
    this.props.dispatch(nextLap(this.props.lap, this.state))
    const items = this.props.lapFuel.map(item => {
      return item.keyName
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
        <div className="card text-white bg-success mb-3">
          <div className='card-header'>
            <h2>Lap {this.props.lap}</h2>
            <p>Need to eat ~200-400 calories per hour</p>
            <p>Input servings eaten</p>
            <DistanceSelect />
          </div>
          <div className="card-body">
            {this.state.wrongInput && <p className='text-danger'>Please input numbers only.</p>}
            {this.props.lapFuel.map(item => {
              if (item.keyName !== 'calories') {
                return (
                  <p className="card-text" key={item.id}>{item.lapText}
                    <input className='form-control' value={this.state[item.keyName] || 0} name={item.keyName}
                      onChange={this.handleChange} data-cal={item.itemCalories}/>
                  </p>
                )
              }
            })}
            <h3>Calories {this.state.calories}</h3>
            <Measurements change={this.handleChange} lapState={this.state}/>
            <div className="center">
              <button type='button' className="btn btn-success btn-success-card" onClick={this.submitLap}>Next Lap</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    lap: state.fuelList.lap,
    lapFuel: state.fuelList.fuel,
    km: state.display.km
  }
}

export default connect(mapStateToProps)(Lap)
