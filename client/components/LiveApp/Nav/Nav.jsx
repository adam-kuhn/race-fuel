import React from 'react'
import {connect} from 'react-redux'

import GoTo from './GoTo/GoTo'

const Nav = (props) => {
  return (
    <div className='center nav'>
      <GoTo route='/guest/live/RemainingFuel'
        text='Fuel List' />
      <GoTo route='/guest/live/LapDetails'
        text='Lap Details' />
      <GoTo route='/guest/live/Totals'
        text='Totals' />
      <GoTo route='/guest/live/Splits'
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
