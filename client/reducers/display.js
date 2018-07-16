import {SETLIST, SHOW_EDIT_LIST,
  STANDARD, CUSTOM, GO_HOME, TOGGLE_UNITS, TOGGLE_WATER,
  SHOW_SPLITS, BACK_TO_MAIN} from '../actions'
const initialState = {
  showSelect: true,
  showEditList: false,
  showMain: false,
  showSplits: false,
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
        showMain: true
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
        showMain: false,
        showEditList: false,
        showSplits: false
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
        showMain: false
      }
    }
    case (BACK_TO_MAIN): {
      return {
        ...state,
        showSplits: false,
        showMain: true
      }
    }
    default: {
      return state
    }
  }
}

export default display
