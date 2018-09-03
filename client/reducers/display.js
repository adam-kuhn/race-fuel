import {TOGGLE_UNITS, TOGGLE_WATER} from '../actions/toggle'
import {NEXT_LAP, LIVE_APP, SETLIST} from '../actions/fuelList'
import {CLEAN_APP} from '../actions/reset'

const initialState = {
  disableSplitButton: true,
  km: true,
  litre: true,
  live: false,
  nav: false
}

function display (state = initialState, action) {
  switch (action.type) {
    case (LIVE_APP): {
      return {
        ...state,
        live: true
      }
    }
    case (SETLIST): {
      return {
        ...state,
        nav: true
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
    case (NEXT_LAP): {
      return {
        ...state,
        disableSplitButton: false
      }
    }
    case (CLEAN_APP): {
      return initialState
    }
    default: {
      return state
    }
  }
}

export default display
