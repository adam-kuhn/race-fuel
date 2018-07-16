import {NEXT_LAP} from '../actions'

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
    default:
      return state
  }
}

export default splits
