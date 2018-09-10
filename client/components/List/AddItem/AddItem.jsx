import React from 'react'
import {connect} from 'react-redux'

import {addItem} from '../../../actions/fuelList'
import camelize from '../../../lib/camel'

class AddItem extends React.Component {
  constructor () {
    super()
    this.state = {
      name: '',
      keyName: '',
      itemCalories: '',
      wrongInput: false,
      wrongInputName: false,
      noValue: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.submitItem = this.submitItem.bind(this)
  }
  handleChange (e) {
    if (e.target.name === 'name') {
      if (e.target.value.search(/\d/) !== -1) {
        this.setState({
          name: '',
          wrongInputName: true
        })
      } else {
        const itemName = e.target.value
        const keyName = camelize(itemName)
        this.setState({
          name: itemName,
          keyName,
          wrongInputName: false
        })
      }
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
          <div className="card-body body-add general-body">
            <p>Item:
              <input className='form-control' name='name'
                value={this.state.name} onChange={this.handleChange}
                placeholder='what fuel?' />
            </p>
            <p>Calories per serving:
              <input className='form-control' value={this.state.itemCalories}
                onChange={this.handleChange} placeholder='how many calories?'/>
            </p>
            {this.state.wrongInputName &&
            <p className='text-danger'>Please use letters only for item name.</p>}
            {this.state.wrongInput &&
            <p className='text-danger'>Please use numbers only for calories.</p>}
            {this.state.noValue &&
            <p className='text-danger'>Please fill out all fields.</p>}
            <div className="center card-btn">
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
