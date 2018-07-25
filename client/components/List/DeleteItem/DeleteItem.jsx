import React from 'react'
import {connect} from 'react-redux'

import {deleteItem} from '../../../actions'

class DeleteItem extends React.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick (e) {
    const itemId = Number(e.target.value)
    this.props.dispatch(deleteItem(itemId))
  }
  render () {
    return (
      <button className="btn btn-danger"
        type='button' onClick={this.handleClick}
        value={this.props.itemId}>Remove Item
      </button>
    )
  }
}

export default connect()(DeleteItem)
