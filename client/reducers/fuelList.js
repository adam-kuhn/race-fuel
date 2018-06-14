import {SETLIST, NEXT_LAP, ADD_TO_LIST, CUSTOM} from '../actions'
import list from '../lib/standardFuel'
const initialState = {
  fuel: list,
  lap: 1
}

function fuelList (state = initialState, action) {
  switch (action.type) {
    case (CUSTOM): {
      return {
        ...state,
        fuel: []
      }
    }
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
        fuel: state.fuel
      }
    }
    case (NEXT_LAP): {
      const fuelItem = Object.keys(action.lapFuel)
      for (let item of action.fuelList) {
        for (let fuelName of fuelItem) {
          if (item.name === fuelName) {
            item.amount = item.amount - (action.lapFuel[fuelName] * (item.serving || 1))
            item.totalAmount = item.totalAmount + (action.lapFuel[fuelName] * (item.serving || 1))
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
      action.item.amount = 0
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
