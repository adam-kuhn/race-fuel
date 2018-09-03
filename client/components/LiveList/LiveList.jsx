import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import LitreMlSelect from '../Select/UnitSelect/LitreMlSelect'

class LiveList extends React.Component {
  render () {
    return (
      <div className='card width text-white bg-primary mb-3'>
        <h3 className='card-header'>Remaining Fuel</h3>
        <div className='toggle'>
          <p>Units</p>
          <LitreMlSelect />
        </div>
        <div className='card-body'>
          {this.props.fuel.map(item => {
            if (item.name !== 'calories') {
              if (item.name === 'water') {
                return (
                  <p className="card-text" key={item.id}>{this.props.litre
                    ? item.text.waterL : item.text.waterMl} {item.amount}</p>
                )
              }
              return (
                <p className='card-text' key={item.id}>
                  {item.text} {item.amount}</p>
              )
            }
          })}
          <div className="center">
            <Link to='/EditList'>
              <button type='button' className="btn btn-primary btn-primary-card">
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
