import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {goHome} from '../../actions/navigation'

class HomeBtn extends React.Component {
  constructor () {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick () {
    const {dispatch, list, distanceTime} = this.props
    dispatch(goHome(list, distanceTime))
  }
  render () {
    return (
      <div className="center">
        <Link to='/'>
          <button type='button' className="btn btn-danger"
            onClick={this.handleClick}>Start Over</button>
        </Link>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    list: state.fuelList.fuel,
    distanceTime: state.distanceTime.measurements
  }
}

export default connect(mapStateToProps)(HomeBtn)
