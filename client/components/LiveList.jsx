import React from 'react'
import {connect} from 'react-redux'

class LiveList extends React.Component {
  render () {
    return (
      <div>
        <h3>Reamining Fuel</h3>
        <ul>
          {this.props.fuel.map(item => {
            if (item.id !== 1) {
              return (
                <li key={item.id}>{item.liveText} {item.amount}</li>
              )
            }
          })}
        </ul>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return state.fuelList
}
export default connect(mapStateToProps)(LiveList)
