import {SETLIST, SHOW_FUEL_LIST,
  STANDARD, CUSTOM, GO_HOME} from '../actions'
const initialState = {
  showSelect: true
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
        showSelect: false,
        showFuelList: true
      }
    }
    case (CUSTOM): {
      return {
        showSelect: false,
        showFuelList: true
      }
    }
    case (GO_HOME): {
      return {
        showSelect: true
      }
    }
    default: {
      return state
    }
  }
}

export default display
