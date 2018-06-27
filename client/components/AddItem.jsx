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
        <div className="card text-white bg-warning mb-3">
          <h3 className="card-header">Add Custom Item</h3>
          <div className="card-body">
            <p>Item:
              <input className='form-control' name='name' value={this.state.name}
                onChange={this.handleChange} placeholder='what fuel?' />
            </p>
            <p>Calories per serving:
              <input className='form-control' value={this.state.itemCalories}
                onChange={this.handleChange} placeholder='how many calories?'/>
            </p>
            {this.state.wrongInput && <p className='text-danger'>Please use numbers only.</p>}
            {this.state.noValue && <p className='text-danger'>Please fill out all fields.</p>}
            <div className="center">
              <button type='button' className="btn btn-warning btn-warning-card text-white"
                onClick={this.submitItem}>Add Item</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(AddItem)
