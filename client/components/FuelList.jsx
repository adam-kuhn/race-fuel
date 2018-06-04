import React from 'react'
import {connect} from 'react-redux'

import {setList} from '../actions'

class FuelList extends React.Component {
  constructor () {
    super()
    this.state = {}
    this.handleChange = this.handleChange.bind(this)
    this.closeList = this.closeList.bind(this)
  }
  handleChange (e) {
    this.setState({
      ...this.state,
      [e.target.name]: Number(e.target.value)
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
                <input value={this.state[item.name] || 0} name={item.name} onChange={this.handleChange}/>
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
