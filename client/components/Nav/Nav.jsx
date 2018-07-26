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
        <GoTo click={this.handleNav}
          text='Lap Details' type='SHOW_LAP' />
        <GoTo click={this.handleNav}
          text='Fuel List' type='SHOW_LIST' />
        <GoTo click={this.handleNav}
          text='Totals' type='SHOW_TOTALS' />
        <HomeBtn />
      </div>
    )
  }
}

export default connect()(Nav)
