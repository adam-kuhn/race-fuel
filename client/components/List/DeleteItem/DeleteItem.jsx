import React from 'react'
import {connect} from 'react-redux'

class DeleteItem extends React.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick (e) {
    console.log('delete', e.target.value)
  }
  render () {
    return (
      <div>
        <h2>DeleteItem component</h2>
        <button type='button' onClick={this.handleClick}
          value={this.props.item}>Delete Item
        </button>
      </div>

    )
  }
}

export default connect()(DeleteItem)
