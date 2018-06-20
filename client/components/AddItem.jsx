import React from 'react'
import {connect} from 'react-redux'

import {addItem} from '../actions'
import camelize from '../lib/camel'

class AddItem extends React.Component {
  constructor () {
    super()
    this.state = {
      name: '',
      keyName: '',
      itemCalories: '',
      wrongInput: false,
      noValue: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.submitItem = this.submitItem.bind(this)
  }
  handleChange (e) {
    if (e.target.name === 'name') {
      const itemName = e.target.value
      const keyName = camelize(itemName)
      this.setState({
        ...this.state,
        name: itemName,
        keyName
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
    if (this.state.name === '' || this.state.itemCalories === '') {
      this.setState({
        noValue: true
      })
    } else {
      this.props.dispatch(addItem(this.state))
      this.setState({
        name: '',
        keyName: '',
        itemCalories: '',
        wrongInput: false,
        noValue: false
      })
    }
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
          <input className='form-control' value={this.state.itemCalories}
            onChange={this.handleChange} placeholder='how many calories?'/>
        </p>
        {this.state.wrongInput && <p className='text-danger'>Please use numbers only.</p>}
        {this.state.noValue && <p className='text-danger'>Please fill out all fields.</p>}
        <button type='button' onClick={this.submitItem}>Add Item</button>
      </div>
    )
  }
}

export default connect()(AddItem)
