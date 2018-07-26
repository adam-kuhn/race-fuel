import React from 'react'
import {connect} from 'react-redux'

import GoTo from './GoTo/GoTo'
import HomeBtn from './HomeBtn/HomeBtn'

import {navigate} from '../../actions'

class Nav extends React.Component {
  constructor () {
    super()
    this.handleNav = this.handleNav.bind(this)
  }
  handleNav (e) {
    this.props.dispatch(navigate(e.target.value))
  }
  render () {
    return (
      <div>
        <GoTo click={this.handleNav}
          text='Splits' type='SHOW_SPLITS'/>
        <HomeBtn />
        <p>Will be List</p>
        <GoTo click={this.handleNav}
          text='Lap Details' type='SHOW_LAP' />
        <p>Will Be Totals</p>
      </div>
    )
  }
}

export default connect()(Nav)
