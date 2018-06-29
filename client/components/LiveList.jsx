import React from 'react'
import {connect} from 'react-redux'

import {showFuelList} from '../actions'
import LitreMlSelect from './LitreMlSelect'

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
        <LitreMlSelect />
        <div className='card-body'>
          {this.props.fuel.map(item => {
            if (item.name !== 'calories') {
              if (item.name === 'water') {
                return (
                  <p className="card-text" key={item.id}>{this.props.litre ? item.liveText : item.liveTextMl} {item.amount}</p>
                )
              }
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
  return {
    fuel: state.fuelList.fuel,
    litre: state.display.litre
  }
}
export default connect(mapStateToProps)(LiveList)
