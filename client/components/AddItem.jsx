import React from 'react'
import {connect} from 'react-redux'

import {addItem} from '../actions'

class AddItem extends React.Component {
  constructor () {
    super()
    this.state = {
      name: '',
      itemCalories: '',
      wrongInput: false
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
      const newValue = Number(e.target.value)
      if (!(newValue + 1)) {
        this.setState({
          itemCalories: '',
          wrongInput: true
        })
      } else {
        this.setState({
          itemCalories: newValue,
          wrongInput: false
        })
      }
    }
  }
  submitItem () {
    this.props.dispatch(addItem(this.state))
    this.setState({
      name: '',
      itemCalories: ''
    })
  }
  render () {
    return (
      <div>
        <h3>Add Custom Item</h3>
        <p>Item:
          <input name='name' value={this.state.name}
            onChange={this.handleChange} placeholder='what fuel?' />
        </p>
        <p>Calories per serving:
          {this.state.wrongInput && <p>Please use numbers only.</p>}
          <input value={this.state.itemCalories}
            onChange={this.handleChange} placeholder='how many calories?'/>
        </p>
        <button type='button' onClick={this.submitItem}>Add Item</button>
      </div>
    )
  }
}

export default connect()(AddItem)
