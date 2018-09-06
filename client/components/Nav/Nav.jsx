import React from 'react'
import {connect} from 'react-redux'

import GoTo from './GoTo/GoTo'

const Nav = (props) => {
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
