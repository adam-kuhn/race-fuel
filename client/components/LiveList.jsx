import React from 'react'
import {connect} from 'react-redux'

class LiveList extends React.Component {
  render () {
    return (
      <ul>
        {this.props.fuel.map(item => {
          return (
            <li key={item.id}>{item.liveText} {item.amount}</li>
          )
        })}
      </ul>
    )
  }
}

function mapStateToProps (state) {
  return state.fuelList
}
export default connect(mapStateToProps)(LiveList)
