import React from 'react'
import {connect} from 'react-redux'

import AddItem from './AddItem/AddItem'
import LitreMlSelect from '../Select/UnitSelect/LitreMlSelect'

import {setList} from '../../actions'

class FuelList extends React.Component {
  constructor () {
    super()
    this.state = {
      wrongInput: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.closeList = this.closeList.bind(this)
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
      <div>
        <div className="card text-white bg-primary mb-3">
          <h3 className="card-header">Input Fuel List</h3>
          <LitreMlSelect />
          {this.state.wrongInput &&
          <p className='text-danger'>Please input numbers only.</p>}
          <div className="card-body">
            {this.props.fuel.map(item => {
              if (item.name !== 'calories') {
                if (item.name === 'water') {
                  return (
                    <p className="card-text" key={item.id}>{this.props.litre
                      ? item.liveText : item.liveTextMl}
                    <input className='form-control'
                      value={this.state[item.keyName] || ''}
                      name={item.keyName} onChange={this.handleChange}
                      placeholder="0"/>
                    </p>
                  )
                }
                return (
                  <p className="card-text" key={item.id}>{item.liveText}
                    <input className='form-control'
                      value={this.state[item.keyName] || ''}
                      name={item.keyName} onChange={this.handleChange}
                      placeholder="0"/>
                  </p>
                )
              }
            })}
            <div className="center">
              <button type='button' className="btn btn-primary btn-primary-card"
                onClick={this.closeList}>Submit Fuel List</button>
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