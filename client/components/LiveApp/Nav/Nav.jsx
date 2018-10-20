import React from 'react'
import {connect} from 'react-redux'

import GoTo from './GoTo/GoTo'

const Nav = (props) => {
  return (
    <div className='center nav'>
      <GoTo route='/live/RemainingFuel'
        text='Fuel List' />
      <GoTo route='/live/LapDetails'
        text='Lap Details' />
      <GoTo route='/live/Totals'
        text='Totals' />
      <GoTo route='/live/Splits'
        text='Splits'
        disable={props.disableSplitButton} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    disableSplitButton: state.display.disableSplitButton
  }
}
export default connect(mapStateToProps)(Nav)
