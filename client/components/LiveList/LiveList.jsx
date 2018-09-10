import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import LitreMlSelect from '../Select/UnitSelect/LitreMlSelect'
import {closeNav} from '../../actions/fuelList'

class LiveList extends React.Component {
  constructor () {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick () {
    this.props.dispatch(closeNav())
  }
  render () {
    return (
      <div className='card width text-white bg-info mb-3'>
        <h3 className='card-header'>Remaining Fuel</h3>
        <div className='toggle'>
          <p>Units</p>
          <LitreMlSelect />
        </div>
        <div className='card-body general-body'>
          {this.props.fuel.map(item => {
            if (item.name !== 'calories') {
              if (item.name === 'water') {
                return (
                  <div className='list-item card-text' key={item.id}>
                    <p>{this.props.litre
                      ? item.text.waterL : item.text.waterMl}:</p>
                    <p>{item.amount}</p>
                  </div>
                )
              }
              return (
                <div className='list-item card-text' key={item.id}>
                  <p>
                    {item.text}:</p>
                  <p>{item.amount}</p>
                </div>
              )
            }
          })}
          <div className="center card-btn">
            <Link to='/AddFuel/EditList'>
              <button type='button' className="btn btn-primary btn-primary-card"
                onClick={this.handleClick}>
              Edit Fuel List</button>
            </Link>
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
