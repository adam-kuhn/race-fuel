import React from 'react'
import {connect} from 'react-redux'

class Lap extends React.Component {
  constructor () {
    super()
    this.state = {
      gu: 0,
      clifbar: 0,
      balls: 0,
      pbj: 0
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render () {
    return (
      <div>
        <p>Need to eat ~200-300 calories per hour</p>
        <p>Values below are ~100 calories each</p>
        <ul>
          <li>Gu (1 gel)
            <input value={this.state.gu} name='gu' onChange={this.handleChange} />
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
      </div>
    )
  }
}

export default connect()(Lap)
