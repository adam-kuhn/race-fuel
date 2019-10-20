import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import fuelList from './fuelList'
import display from './display'
import distanceTime from './distanceTime'
import splits from './splits'
import auth from './auth'

const rootPersistConfig = {
  key: 'root',
  storage: storage
}

const rootReducer = combineReducers({
  display,
  fuelList,
  distanceTime,
  splits,
  auth
})

export default persistReducer(rootPersistConfig, rootReducer)
