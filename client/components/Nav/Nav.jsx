import React from 'react'
import {connect} from 'react-redux'

import GoToSplits from './GoToSplits/GoToSplits'
import HomeBtn from './HomeBtn/HomeBtn'

import {navigate} from '../../actions'

class Nav extends React.Component {
  constructor () {
    super()
    this.handleNav = this.handleNav.bind(this)
  }
  handleNav (e) {
    const type = 'SHOW_' + e.target.value
    this.props.dispatch(navigate(type))
  }
  render () {
    return (
      <div>
        <GoToSplits click={this.handleNav}/>
        <HomeBtn />
        <p>Will be List</p>
        <p>GoToLap</p>
        <p>Will Be Totals</p>
      </div>
    )
  }
}

export default connect()(Nav)
