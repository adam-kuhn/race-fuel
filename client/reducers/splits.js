import {NEXT_LAP} from '../actions/fuelList'
import {CLEAN_APP} from '../actions/reset'
const initialState = {
  lapInfo: []
}
const splits = (state = initialState, action) => {
  switch (action.type) {
    case (NEXT_LAP): {
      return {
        lapInfo: [...state.lapInfo, action.lapFuel]
      }
    }
    case (CLEAN_APP): {
      return initialState
    }
    default:
      return state
  }
}

export default splits
