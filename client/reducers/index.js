import {combineReducers} from 'redux'

import fuelList from './fuelList'
import display from './display'
import totals from './totals'

export default combineReducers({
  display,
  fuelList,
  // totals
})
