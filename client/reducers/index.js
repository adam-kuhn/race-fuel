import {combineReducers} from 'redux'

import fuelList from './fuelList'
import display from './display'
import distanceTime from './distanceTime'
import splits from './splits'

export default combineReducers({
  display,
  fuelList,
  distanceTime,
  splits
})
