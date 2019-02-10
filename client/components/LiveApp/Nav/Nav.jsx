import React from 'react'
import {connect} from 'react-redux'

import GoTo from './GoTo/GoTo'

const Nav = (props) => {
  return (
    <div className='center nav'>
      <GoTo route={`/${props.user}/live/RemainingFuel`}
        text='Fuel List' />
      <GoTo route={`/${props.user}/live/LapDetails`}
        text='Lap Details' />
      <GoTo route={`/${props.user}/live/Totals`}
        text='Totals' />
      <GoTo route={`/${props.user}/live/Splits`}
        text='Splits'
        disable={props.disableSplitButton} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    disableSplitButton: state.display.disableSplitButton,
    user: state.auth.userInfo.username ? state.auth.userInfo.username : 'guest'
  }
}
export default connect(mapStateToProps)(Nav)
