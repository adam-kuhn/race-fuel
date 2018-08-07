import React from 'react'
import {connect} from 'react-redux'

import GoTo from './GoTo/GoTo'
import {navigate} from '../../actions/navigation'

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
      <div className='center nav'>
        <GoTo click={this.handleNav}
          text='Fuel List' type='SHOW_LIST' />
        <GoTo click={this.handleNav}
          text='Lap Details' type='SHOW_LAP' />
        <GoTo click={this.handleNav}
          text='Totals' type='SHOW_TOTALS' />
        <GoTo click={this.handleNav}
          text='Splits' type='SHOW_SPLITS'
          disable={this.props.disableSplitButton} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    disableSplitButton: state.display.disableSplitButton
  }
}
export default connect(mapStateToProps)(Nav)
