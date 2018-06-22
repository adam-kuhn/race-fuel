import {combineReducers} from 'redux'

import fuelList from './fuelList'
import display from './display'
import distanceTime from './distanceTime'
export default combineReducers({
  display,
  fuelList,
  distanceTime
})
