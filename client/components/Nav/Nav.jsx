import React from 'react'
import {connect} from 'react-redux'

import GoTo from './GoTo/GoTo'

class Nav extends React.Component {
  render () {
    return (
      <div className='center width nav'>
        <GoTo route='/RemainingFuel'
          text='Fuel List' />
        <GoTo route='LapDetails'
          text='Lap Details' />
        <GoTo route='/Totals'
          text='Totals' />
        <GoTo route='/Splits'
          text='Splits'
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
