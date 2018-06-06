import {SETLIST, NEXT_LAP, SHOW_FUEL_LIST, ADD_TO_LIST} from '../actions'
import list from '../lib/standardFuel'
const initialState = {
  fuel: list,
  fuelSet: false,
  lap: 1
}

function fuelList (state = initialState, action) {
  switch (action.type) {
    case (SETLIST): {
      const fuelItem = Object.keys(action.fuelList)
      for (let item of state.fuel) {
        for (let fuelName of fuelItem) {
          if (item.name === fuelName) {
            item.amount = action.fuelList[fuelName]
          }
        }
      }
      return {
        ...state,
        fuelSet: true
      }
    }
    case (SHOW_FUEL_LIST): {
      return {
        ...state,
        fuelSet: false
      }
    }
    case (NEXT_LAP): {
      const fuelItem = Object.keys(action.lapFuel)
      for (let item of action.fuelList) {
        for (let fuelName of fuelItem) {
          if (item.name === fuelName) {
            item.amount = item.amount - action.lapFuel[fuelName]
            item.totalAmount = item.totalAmount + action.lapFuel[fuelName]
          }
        }
      }
      return {
        ...state,
        lap: action.lap + 1
      }
    }
    case (ADD_TO_LIST): {
      action.item.id = action.fuelList.length + 1
      action.item.liveText = action.item.name
      action.item.lapText = action.item.name
      action.item.totalAmount = 0
      action.item.totalText = action.item.name
      return {
        ...state,
        fuel: [...action.fuelList, action.item]
      }
    }
    default: {
      return state
    }
  }
}

export default fuelList
