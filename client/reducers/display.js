import {SETLIST, SHOW_FUEL_LIST} from '../actions'
const initialState = {
  showFuelList: false
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
    default: {
      return state
    }
  }
}

export default display
