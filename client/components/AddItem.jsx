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
      </div>
    )
  }
}

export default connect()(AddItem)
