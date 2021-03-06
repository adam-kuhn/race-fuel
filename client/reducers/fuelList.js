import {TOGGLE_WATER} from '../actions/toggle'
import {CUSTOM, STANDARD} from '../actions/select'
import {SETLIST, NEXT_LAP, ADD_TO_LIST, DELETE_ITEM} from '../actions/fuelList'
import {CLEAN_APP} from '../actions/reset'
import list from '../lib/standardFuel'
const initialState = {
  lap: 1,
  fuel: []
}

function fuelList (state = initialState, action) {
  switch (action.type) {
    case (STANDARD): {
      return {
        ...state,
        fuel: list
      }
    }
    case (CUSTOM): {
      return {
        ...state,
        fuel: [list[0], list[1]]
      }
    }
    case (SETLIST): {
      const fuelItem = Object.keys(action.fuelList)
      for (let item of state.fuel) {
        for (let fuelName of fuelItem) {
          if (item.keyName === fuelName || item.name === fuelName) {
            item.amount = action.fuelList[fuelName]
          }
        }
      }
      return {
        ...state,
        fuel: [...state.fuel]
      }
    }
    case (NEXT_LAP): {
      const fuelItem = Object.keys(action.lapFuel)

      for (let item of state.fuel) {
        for (let fuelName of fuelItem) {
          if (item.name === fuelName || item.keyName === fuelName) {
            item.amount = item.amount - (action.lapFuel[fuelName].value)
            item.totalAmount = item.totalAmount + (action.lapFuel[fuelName].value)
          }
        }
      }
      return {
        ...state,
        fuel: [...state.fuel],
        lap: action.lap + 1
      }
    }
    case (ADD_TO_LIST): {
      action.item.id = state.fuel.length + 1
      action.item.text = action.item.name
      action.item.totalAmount = 0
      action.item.amount = 0
      action.item.totalText = action.item.name
      return {
        ...state,
        fuel: [...state.fuel, action.item]
      }
    }
    case (CLEAN_APP): {
      const fuelList = action.list
      for (let item of fuelList) {
        item.amount = 0
        item.totalAmount = 0
      }
      return {
        fuel: fuelList,
        lap: 1
      }
    }
    case (TOGGLE_WATER): {
      if (action.boolean === true) {
        action.fuel[1].totalAmount = action.totalWater * 1000
        action.fuel[1].amount = action.water * 1000
      } else {
        action.fuel[1].amount = action.water / 1000
        action.fuel[1].totalAmount = action.totalWater / 1000
      }
      return {
        ...state,
        fuel: [...action.fuel]
      }
    }
    case (DELETE_ITEM): {
      return {
        ...state,
        fuel: state.fuel.filter(item => {
          return item.id !== action.itemId
        })
      }
    }
    default: {
      return state
    }
  }
}

export default fuelList
