import React from 'react'
import {connect} from 'react-redux'

class Totals extends React.Component {
  render () {
    return (
      <div>
        <h2>Totals!</h2>
        {this.props.totals.map(item => {
          return (
            <p key={item.id}>{item.text} {item.amount}</p>
          )
        })}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return state.fuelList
}

export default connect(mapStateToProps)(Totals)
