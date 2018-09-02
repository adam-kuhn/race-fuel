import {SHOW_EDIT_LIST, GO_HOME,
  SHOW_SPLITS, SHOW_LAP, SHOW_LIST,
  SHOW_TOTALS} from '../actions/navigation'
import {TOGGLE_UNITS, TOGGLE_WATER} from '../actions/toggle'
import {NEXT_LAP, LIVE_APP, SETLIST} from '../actions/fuelList'

const initialState = {
  showSelect: true,
  showNav: false,
  showEditList: false,
  showList: false,
  showLap: false,
  showSplits: false,
  showTotals: false,
  disableSplitButton: true,
  km: true,
  litre: true,
  live: false,
  nav: false
}

function display (state = initialState, action) {
  switch (action.type) {
    case (SHOW_EDIT_LIST): {
      return {
        ...state,
        showEditList: true,
        showSplits: false,
        showLap: false,
        showList: false,
        showTotals: false
      }
    }

    case (GO_HOME): {
      return {
        ...state,
        showSelect: true,
        showNav: false,
        showEditList: false,
        showList: false,
        showLap: false,
        showSplits: false,
        showTotals: false,
        disableSplitButton: true,
        live: false,
        nav: false
      }
    }
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
    case (SHOW_SPLITS): {
      return {
        ...state,
        showSplits: true,
        showEditList: false,
        showLap: false,
        showList: false,
        showTotals: false
      }
    }
    case (SHOW_LAP): {
      return {
        ...state,
        showLap: true,
        showEditList: false,
        showSplits: false,
        showList: false,
        showTotals: false
      }
    }
    case (SHOW_LIST): {
      return {
        ...state,
        showLap: false,
        showEditList: false,
        showSplits: false,
        showList: true,
        showTotals: false
      }
    }
    case (SHOW_TOTALS): {
      return {
        ...state,
        showLap: false,
        showEditList: false,
        showSplits: false,
        showList: false,
        showTotals: true
      }
    }
    case (NEXT_LAP): {
      return {
        ...state,
        disableSplitButton: false
      }
    }
    default: {
      return state
    }
  }
}

export default display
