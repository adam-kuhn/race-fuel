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
          {this.props.fuel.map(item => {
            return (
              <li key={item.id}>{item.liveText}
                <input value={this.state[item.name]} name={item.name} onChange={this.handleChange}/>
                <button type='button' name={item.name} onClick={this.plusOne}>+</button>
                <button type='button' name={item.name} onClick={this.minusOne}>-</button>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state.fuelList
}

export default connect(mapStateToProps)(FuelList)
