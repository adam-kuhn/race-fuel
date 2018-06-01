import {combineReducers} from 'redux'

import fuelList from './fuelList'
import display from './display'
import lap from './lap'
import totals from './totals'

export default combineReducers({
  display,
  fuelList,
  lap,
  totals
})
