import {TOGGLE_UNITS} from '../actions'

const initialState = {
  distance: 0,
  time: 0
}

const distanceAndTime = (state = initialState, action) => {
  switch (action.type) {
    case (TOGGLE_UNITS): {
      return {
        ...state,
        distance: 2
      }
    }
    default: {
      return initialState
    }
  }
}

export default distanceAndTime
