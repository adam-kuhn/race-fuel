import React from 'react'

class FuelList extends React.Component {
  constructor () {
    super()
    this.state = {
      gu: 0,
      clifbar: 0,
      balls: 0,
      pbj: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.plusOne = this.plusOne.bind(this)
    this.minusOne = this.minusOne.bind(this)
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

  render () {
    return (
      <ul>
        <li>Gu
          <input value={this.state.gu} name='gu' onChange={this.handleChange} />
          <button type='button' name='gu' onClick={this.plusOne}>+</button>
          <button type='button' name='gu' onClick={this.minusOne}>-</button>
        </li>
      </ul>
    )
  }
}

export default FuelList
