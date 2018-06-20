import React from 'react'
import {connect} from 'react-redux'
import AddItem from './AddItem'

import {setList} from '../actions'

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
        [e.target.name]: 0,
        wrongInput: true
      })
    } else {
      this.setState({
        ...this.state,
        [e.target.name]: newValue,
        wrongInput: false
      })
    }
  }
  closeList () {
    this.props.dispatch(setList(this.state))
  }
  render () {
    return (
      <div>
        <div className="card text-white bg-primary mb-3">
          <h3 className="card-header">Input Fuel List</h3>
          {this.state.wrongInput && <p className='text-danger'>Please input numbers only.</p>}
          <div className="card-body">
            {this.props.fuel.map(item => {
              if (item.name !== 'calories') {
                return (
                  <p className="card-text" key={item.id}>{item.liveText}
                    <input className='form-control' value={this.state[item.keyName] || 0}
                      name={item.keyName} onChange={this.handleChange}/>
                  </p>
                )
              }
            })}
          </div>
        </div>
        <button type='button' className="btn btn-primary" onClick={this.closeList}>Submit Fuel List</button>
        <AddItem />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state.fuelList
}

export default connect(mapStateToProps)(FuelList)
