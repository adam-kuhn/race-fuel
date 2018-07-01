import {SETLIST, SHOW_FUEL_LIST,
  STANDARD, CUSTOM, GO_HOME, TOGGLE_UNITS, TOGGLE_WATER} from '../actions'
const initialState = {
  showSelect: true,
  km: true,
  litre: true
}

function display (state = initialState, action) {
  switch (action.type) {
    case (SHOW_FUEL_LIST): {
      return {
        ...state,
        showFuelList: true
      }
    }
    case (SETLIST): {
      return {
        ...state,
        showFuelList: false
      }
    }
    case (STANDARD): {
      return {
        ...state,
        showSelect: false,
        showFuelList: true
      }
    }
    case (CUSTOM): {
      return {
        ...state,
        showSelect: false,
        showFuelList: true
      }
    }
    case (GO_HOME): {
      return {
        ...state,
        showSelect: true
      }
    }
    case (TOGGLE_UNITS): {
      return {
        ...state,
        km: !action.boolean
      }
    }
    case (TOGGLE_WATER): {
      return {
        ...state,
        litre: !action.boolean
      }
    }
    default: {
      return state
    }
  }
}

export default display
