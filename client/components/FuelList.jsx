import React from 'react'
import {connect} from 'react-redux'

import {setList} from '../actions'

class FuelList extends React.Component {
  constructor () {
    super()
    this.state = {
      gu: 0,
      clifbar: 0,
      balls: 0,
      pbj: 0,
      banana: 0,
      water: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.plusOne = this.plusOne.bind(this)
    this.minusOne = this.minusOne.bind(this)
    this.closeList = this.closeList.bind(this)
  }
  handleChange (e) {
    this.setState({
      [e.target.name]: Number(e.target.value)
    })
  }

  plusOne (e) {
    const newValue = this.state[e.target.name] + 1
    this.setState({
      [e.target.name]: newValue
    })
  }

  minusOne (e) {
    const newValue = this.state[e.target.name] - 1
    this.setState({
      [e.target.name]: newValue
    })
  }
  closeList () {
    this.props.dispatch(setList(this.state))
  }

  render () {
    return (
      <div>
        <button type='button' onClick={this.closeList}>Submit Fuel List</button>
        <ul>
          <li>Gu
            <input value={this.state.gu} name='gu' onChange={this.handleChange} />
            <button type='button' name='gu' onClick={this.plusOne}>+</button>
            <button type='button' name='gu' onClick={this.minusOne}>-</button>
          </li>
          <li>ClifBar
            <input value={this.state.clifbar} name='clifbar' onChange={this.handleChange} />
            <button type='button' name='clifbar' onClick={this.plusOne}>+</button>
            <button type='button' name='clifbar' onClick={this.minusOne}>-</button>
          </li>
          <li>Power Balls
            <input value={this.state.balls} name='balls' onChange={this.handleChange} />
            <button type='button' name='balls' onClick={this.plusOne}>+</button>
            <button type='button' name='balls' onClick={this.minusOne}>-</button>
          </li>
          <li>Peanut Butter and Jelly
            <input value={this.state.pbj} name='pbj' onChange={this.handleChange} />
            <button type='button' name='pbj' onClick={this.plusOne}>+</button>
            <button type='button' name='pbj' onClick={this.minusOne}>-</button>
          </li>
          <li>Banana
            <input value={this.state.banana} name='banana' onChange={this.handleChange} />
            <button type='button' name='banana' onClick={this.plusOne}>+</button>
            <button type='button' name='banana' onClick={this.minusOne}>-</button>
          </li>
          <li>Water
            <input value={this.state.water} name='water' onChange={this.handleChange} />
            <button type='button' name='water' onClick={this.plusOne}>+</button>
            <button type='button' name='water' onClick={this.minusOne}>-</button>
          </li>
        </ul>
      </div>
    )
  }
}

export default connect()(FuelList)
