import React from 'react'
import {connect} from 'react-redux'

class AddItem extends React.Component {
  constructor () {
    super()
    this.state = {}
  }
  render () {
    return (
      <div>
        <h3>Add Custom Item</h3>
        <p>Item: <input /> </p>
        <p>Amount: <input /> </p>
        <p>Calories per serving: <input /> </p>
      </div>
    )
  }
}

export default connect()(AddItem)
