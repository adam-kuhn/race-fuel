import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import AddItem from './AddItem/AddItem'
import LitreMlSelect from '../UnitSelect/UnitSelect/LitreMlSelect'
import FuelListItem from './FuelListItem/FuelListItem'

import {setList, appIsLive} from '../../../actions/fuelList'

class FuelList extends React.Component {
  constructor () {
    super()
    this.state = {
      wrongInput: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.closeList = this.closeList.bind(this)
  }

  componentDidMount () {
    this.props.dispatch(appIsLive())
  }

  handleChange (e) {
    const newValue = Number(e.target.value)
    if (!(newValue + 1)) {
      this.setState({
        [e.target.name]: '',
        wrongInput: true
      })
    } else {
      this.setState({
        ...this.state,
        [e.target.name]: e.target.value,
        wrongInput: false
      })
    }
  }
  closeList () {
    let itemValues = {}
    for (let item in this.state) {
      itemValues[item] = this.state[item]
    }
    this.props.dispatch(setList(itemValues))
  }

  render () {
    return (
      <div className='width'>
        <div className="card text-white bg-info mb-3">
          <h3 className="card-header">Edit Fuel List</h3>
          <div className='toggle card-header'>
            <h4>Units</h4>
            <LitreMlSelect />
          </div>
          {this.state.wrongInput &&
          <p className='text-danger'>Please input numbers only.</p>}
          <div className="card-body list-body general-body">
            {this.props.fuel.map(item => {
              if (item.name !== 'calories') {
                return (
                  <FuelListItem key={item.id}
                    text={this.props.litre
                      ? item.text.waterL || item.text : item.text.waterMl || item.text}
                    value={this.state[item.keyName || item.name] || ''}
                    name={item.keyName || item.name} change={this.handleChange}
                    itemId={item.id}
                  />
                )
              }
            })}
            <div className="center">
              <Link to={'/RemainingFuel'}>
                <button type='button' className="btn btn-info"
                  onClick={this.closeList}>Submit Fuel List</button>
              </Link>
            </div>
          </div>
        </div>
        <AddItem />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    fuel: state.fuelList.fuel,
    litre: state.display.litre
  }
}

export default connect(mapStateToProps)(FuelList)
