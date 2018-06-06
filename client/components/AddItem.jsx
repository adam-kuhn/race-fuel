import React from 'react'
import {connect} from 'react-redux'

import {addItem} from '../actions'

class AddItem extends React.Component {
  constructor () {
    super()
    this.state = {
      name: '',
      amount: '',
      calories: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.submitItem = this.submitItem.bind(this)
  }
  handleChange (e) {
    if (e.target.name === 'name') {
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
  submitItem () {
    this.props.dispatch(addItem(this.state))
  }
  render () {
    return (
      <div>
        <h3>Add Custom Item</h3>
        <p>Item:
          <input name='name' value={this.state.name}
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
        <button type='button' onClick={this.submitItem}>Add Item</button>
      </div>
    )
  }
}

export default connect()(AddItem)
