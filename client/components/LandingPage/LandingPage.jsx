import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {standard, custom} from '../../actions/select'
import {cleanApp} from '../../actions/reset'

class LandingPage extends React.Component {
  constructor () {
    super()
    this.state = {
      loggedIn: false
    }
    this.custom = this.custom.bind(this)
    this.standard = this.standard.bind(this)
  }
  // on log out need to clear store and get this to update correctly
  componentDidMount () {
    const {dispatch, list, distanceTime} = this.props
    dispatch(cleanApp(list, distanceTime))
    if (window.localStorage.getItem('token')) {
      this.setState({
        loggedIn: true
      })
    } else {
      this.setState({
        loggedIn: false
      })
    }
  }
  custom () {
    this.props.dispatch(custom())
  }
  standard () {
    this.props.dispatch(standard())
  }
  render () {
    return (
      <div className='landing-vert'>
        <div className="center">
          <Link to={`/${this.props.user}/live/AddFuel/Custom`}>
            <button type='button' className="btn btn-primary btn-select select"
              onClick={this.custom}>Custom List</button>
          </Link>
          <Link to={`/${this.props.user}/live/AddFuel/Standard`}>
            <button type='button' className="btn btn-primary btn-select select"
              onClick={this.standard}>Standard List</button>
          </Link>
        </div>
        <div>
          <Link to='/auth/login'>Existing User</Link>
          <div>
            <p>Get an account and store passed races</p>
            <Link to='auth/register'>Register</Link>
            {this.props.storeLoggedIn && <h3>LOGGED IN</h3>}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.fuelList.fuel,
    distanceTime: state.distanceTime.measurements,
    user: state.auth.userInfo.username ? state.auth.userInfo.username : 'guest',
    storeLoggedIn: state.auth.loggedIn
  }
}

export default connect(mapStateToProps)(LandingPage)
