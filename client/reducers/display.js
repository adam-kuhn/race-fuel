import {SETLIST, SHOW_EDIT_LIST,
  STANDARD, CUSTOM, GO_HOME, TOGGLE_UNITS, TOGGLE_WATER,
  SHOW_SPLITS, NEXT_LAP,
  SHOW_LAP, SHOW_LIST, SHOW_TOTALS} from '../actions'
const initialState = {
  showSelect: true,
  showEditList: false,
  showList: false,
  showLap: false,
  showSplits: false,
  showTotals: false,
  disableSplitButton: true,
  km: true,
  litre: true
}

function display (state = initialState, action) {
  switch (action.type) {
    case (SHOW_EDIT_LIST): {
      return {
        ...state,
        showEditList: true
      }
    }
    case (SETLIST): {
      return {
        ...state,
        showEditList: false,
        showList: true
      }
    }
    case (STANDARD): {
      return {
        ...state,
        showSelect: false,
        showEditList: true
      }
    }
    case (CUSTOM): {
      return {
        ...state,
        showSelect: false,
        showEditList: true
      }
    }
    case (GO_HOME): {
      return {
        ...state,
        showSelect: true,
        showEditList: false,
        showList: false,
        showLap: false,
        showSplits: false,
        showTotals: false,
        disableSplitButton: true
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
