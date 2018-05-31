import {combineReducers} from 'redux'

import fuelList from './fuelList'
import display from './display'
import lap from './lap'

export default combineReducers({
  display,
  fuelList,
  lap
})
