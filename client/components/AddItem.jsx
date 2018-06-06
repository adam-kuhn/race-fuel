import React from 'react'
import {connect} from 'react-redux'

class AddItem extends React.Component {
  constructor () {
    super()
    this.state = {
      item: '',
      amount: '',
      calories: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange (e) {
    if (e.target.name === 'item') {
      this.setState({
        ...this.state,
        [e.target.name]: e.target.value
      })
    } else {
      this.setState({
        ...this.state,
        [e.target.name]: Number(e.target.value)
      })
    }
  }
  render () {
    return (
      <div>
        <h3>Add Custom Item</h3>
        <p>Item:
          <input name='item' value={this.state.item}
            onChange={this.handleChange} placeholder='what fuel?' />
        </p>
        <p>Amount:
          <input name ='amount' value={this.state.amount}
            onChange={this.handleChange} placeholder='how many?'/>
        </p>
        <p>Calories per serving:
          <input name='calories' value={this.state.calories}
            onChange={this.handleChange} placeholder='how many calories?'/>
        </p>
      </div>
    )
  }
}

export default connect()(AddItem)
