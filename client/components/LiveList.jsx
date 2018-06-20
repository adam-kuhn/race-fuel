import React from 'react'
import {connect} from 'react-redux'

import {showFuelList} from '../actions'

class LiveList extends React.Component {
  constructor () {
    super()
    this.editFuelList = this.editFuelList.bind(this)
  }
  editFuelList () {
    this.props.dispatch(showFuelList())
  }
  render () {
    return (
      <div className='card text-white bg-primary mb-3'>
        <h3 className='card-header'>Remaining Fuel</h3>
        <div className='card-body'>
          {this.props.fuel.map(item => {
            if (item.name !== 'calories') {
              return (
                <p className='card-text' key={item.id}>{item.liveText} {item.amount}</p>
              )
            }
          })}
          <div className="center">
            <button type='button' className="btn btn-primary btn-primary-card"
              onClick={this.editFuelList}>Edit Fuel List</button>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return state.fuelList
}
export default connect(mapStateToProps)(LiveList)
