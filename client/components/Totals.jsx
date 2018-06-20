import React from 'react'
import {connect} from 'react-redux'

class Totals extends React.Component {
  render () {
    return (
      <div className="card text-white bg-info mb-3">
        <h2 className="card-header">Totals!</h2>
        <div className="card-body">
          {this.props.fuel.map(item => {
            return (
              <p className="card-text" key={item.id}>{item.totalText} {item.totalAmount}</p>
            )
          })}
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return state.fuelList
}

export default connect(mapStateToProps)(Totals)
