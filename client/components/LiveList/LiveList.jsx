import React from 'react'
import {connect} from 'react-redux'

// import {showEditList} from '../../actions/navigation'
import LitreMlSelect from '../Select/UnitSelect/LitreMlSelect'

class LiveList extends React.Component {
  constructor () {
    super()
    this.editFuelList = this.editFuelList.bind(this)
  }
  editFuelList () {
    // this.props.dispatch(showEditList())
  }
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
