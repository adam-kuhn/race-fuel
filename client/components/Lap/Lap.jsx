import React from 'react'
import {connect} from 'react-redux'

import DistanceSelect from '../Select/UnitSelect/DistanceSelect'
import LitreMlSelect from '../Select/UnitSelect/LitreMlSelect'
import Measurements from './Measurements/Measurements'

import {nextLap} from '../../actions/fuelList'

class Lap extends React.Component {
  constructor () {
    super()
    this.state = {
      fuel: {
        calories: {
          value: 0
        }
      },
      wrongInput: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.submitLap = this.submitLap.bind(this)
    this.updateWater = this.updateWater.bind(this)
    this.updateKm = this.updateKm.bind(this)
  }

  handleChange (e) {
    const {value, name} = e.target
    const itemCalories = e.target.getAttribute('data-cal')
    if (isNaN(value)) {
      this.setWrongInputError(name, itemCalories)
    } else {
      this.updateLapFuelItem(e, itemCalories)
    }
  }

  setWrongInputError (categoryName, itemCalories) {
    const resetStateWithError = {
      fuel: {
        ...this.state.fuel,
        [categoryName]: {
          value: ''
        }
      },
      wrongInput: true
    }
    if (categoryName !== 'time' || categoryName !== 'distance') {
      const lapFuelItems = this.state.fuel
      const amountOfCaloriesForThisItem = itemCalories * (lapFuelItems[categoryName]
        ? lapFuelItems[categoryName].value : 0)
      const previousCalorieValue = lapFuelItems.calories.value - amountOfCaloriesForThisItem
      resetStateWithError.fuel.calories.value = previousCalorieValue || 0
    }
    this.setState(resetStateWithError)
  }

  updateLapFuelItem (e, itemCalories) {
    const {value, name} = e.target
    const lapFuelItems = this.state.fuel
    const fuelItemValue = lapFuelItems[name] ? lapFuelItems[name].value : 0
    const numberOfItemsAdded = value - fuelItemValue
    const itemText = e.target.getAttribute('data-text') || 'false'
    const caloriesEaten = (itemCalories * numberOfItemsAdded) + lapFuelItems.calories.value
    this.setState({
      fuel: {
        ...lapFuelItems,
        [name]: {
          value,
          text: itemText
        },
        calories: {
          value: caloriesEaten
        }
      },
      wrongInput: false
    })
  }

  submitLap () {
    const {lap, dispatch} = this.props
    const oldState = this.state.fuel
    let lapValues = {
      time: {}
    }
    for (let item in oldState) {
      const newValue = Number(oldState[item].value)
      if (item === 'hour' || item === 'min' || item === 'sec') {
        lapValues.time[item] = newValue
      } else {
        lapValues[item] = {}
        lapValues[item].value = newValue
        lapValues[item].text = oldState[item].text || 'Calories'
        lapValues.lap = this.props.lap
      }
    }
    dispatch(nextLap(lap, lapValues))
    this.setState({
      fuel: {
        calories: {
          value: 0
        }
      },
      wrongInput: false
    })
  }
  // submitLap, submits a lap presumable lap data
  // takes "lap", from props (redux)
  // takes previous state from component
  // creates a new value, just the value from lap fuel
  // if item is a unit of time. add time to lapValues object
  // if not set lapValue.item to the values from old State, plus this.props.lap
  // then dispatch action with values and update state

  updateWater (litre) {
    const currentFuelState = this.state.fuel
    if (currentFuelState.water) {
      this.setState({
        fuel: {
          ...this.state.fuel,
          water: {
            ...this.state.fuel.water,
            text: litre
              ? 'Water (L)' : 'Water (mL)'
          }
        }
      })
    } else {
      this.setState({
        fuel: {
          ...this.state.fuel,
          water: {
            text: litre ? 'Water (L)' : 'Water (mL)',
            value: ''
          }
        }
      })
    }
  }

  updateKm (km) {
    const currentFuelState = this.state.fuel
    if (currentFuelState.distance) {
      this.setState({
        fuel: {
          ...this.state.fuel,
          distance: {
            ...this.state.fuel.distance,
            text: km
              ? 'Distance (Km)' : 'Distance (Mi)'
          }
        }
      })
    } else {
      this.setState({
        ...this.state.fuel,
        distance: {
          text: km ? 'Km' : 'Mi',
          value: ''
        }
      })
    }
  }

  render () {
    return (
      <div className='width'>
        <div className="card text-white bg-info mb-3">
          <div className='card-header'>
            <h2>Lap {this.props.lap}</h2>
            <p>Need to eat ~200-400 calories per hour</p>
            <p>Input amount eaten</p>
          </div>
          <div className='toggle card-header'>
            <h4>Units</h4>
            <LitreMlSelect updateWater={this.updateWater}/>
            <DistanceSelect updateKm={this.updateKm}/>
          </div>
          <div className="card-body general-body">
            {this.state.wrongInput && <p className='text-danger'>Please input numbers only.</p>}
            {this.props.lapFuel.map(item => {
              if (item.name !== 'calories') {
                if (item.name === 'water') {
                  return (
                    <p className="card-text list-item" key={item.id}>{this.props.litre
                      ? item.text.waterL : item.text.waterMl}
                    <input className='form-control'
                      value={this.state.fuel[item.keyName || item.name]
                        ? this.state.fuel[item.keyName || item.name].value : ''}
                      name={item.keyName || item.name} onChange={this.handleChange}
                      placeholder="0" data-text={this.props.litre
                        ? item.text.waterL : item.text.waterMl}/>
                    </p>
                  )
                }
                return (
                  <p className="card-text list-item" key={item.id}>{item.text}
                    <input className='form-control'
                      value={this.state.fuel[item.keyName || item.name]
                        ? this.state.fuel[item.keyName || item.name].value : ''}
                      name={item.keyName || item.name}
                      onChange={this.handleChange} data-cal={item.itemCalories}
                      placeholder="0"
                      data-text={item.text}/>
                  </p>
                )
              }
            })}
            <h3>Calories {this.state.fuel.calories.value}</h3>
            <Measurements change={this.handleChange} lapState={this.state.fuel}/>
            <div className="center card-btn">
              <button type='button' className="btn btn-info"
                onClick={this.submitLap}>Next Lap</button>
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
    km: state.display.km,
    distanceTime: state.distanceTime.measurements,
    litre: state.display.litre
  }
}

export default connect(mapStateToProps)(Lap)
