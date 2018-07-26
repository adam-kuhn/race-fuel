import React from 'react'
import {connect} from 'react-redux'

import DistanceSelect from '../../Select/UnitSelect/DistanceSelect'
import Measurements from './Measurements/Measurements'

import {nextLap} from '../../../actions'

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
  }
  handleChange (e) {
    const newValue = Number(e.target.value)
    const itemCalories = e.target.getAttribute('data-cal')
    if (!(newValue + 1)) {
      if (e.target.name === 'time' || e.target.name === 'distance') {
        this.setState({
          fuel: {
            ...this.state.fuel,
            [e.target.name]: {
              value: ''
            }
          },
          wrongInput: true
        })
      } else {
        const lowerCals = this.state.fuel.calories.value -
        (itemCalories * (this.state.fuel[e.target.name]
          ? this.state.fuel[e.target.name].value : 0))
        this.setState({
          fuel: {
            ...this.state.fuel,
            [e.target.name]: {
              value: ''
            },
            calories: {
              value: lowerCals || 0
            }
          },
          wrongInput: true
        })
      }
    } else {
      const difference = e.target.value - (this.state.fuel[e.target.name]
        ? this.state.fuel[e.target.name].value : 0)
      const caloriesEaten = ((itemCalories * difference) + this.state.fuel.calories.value)
      const itemText = e.target.getAttribute('data-text')
      this.setState({
        fuel: {
          ...this.state.fuel,
          [e.target.name]: {
            value: e.target.value,
            text: itemText
          },
          calories: {
            value: caloriesEaten
          }
        },
        wrongInput: false
      })
    }
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
        // lapValues.time[item].value = newValue
      } else {
        lapValues[item] = {}
        lapValues[item].value = newValue
        lapValues[item].text = oldState[item].text || 'Calories'
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

  render () {
    return (
      <div>
        <div className="card text-white bg-success mb-3">
          <div className='card-header'>
            <h2>Lap {this.props.lap}</h2>
            <p>Need to eat ~200-400 calories per hour</p>
            <p>Input amount eaten</p>
            <DistanceSelect />
          </div>
          <div className="card-body">
            {this.state.wrongInput && <p className='text-danger'>Please input numbers only.</p>}
            {this.props.lapFuel.map(item => {
              if (item.name !== 'calories') {
                if (item.name === 'water') {
                  return (
                    <p className="card-text" key={item.id}>{this.props.litre
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
                  <p className="card-text" key={item.id}>{item.text}
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
            <div className="center">
              <button type='button' className="btn btn-success btn-success-card"
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