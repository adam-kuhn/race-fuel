import {combineReducers} from 'redux'

import fuelList from './fuelList'
import display from './display'

export default combineReducers({
  display,
  fuelList
})
