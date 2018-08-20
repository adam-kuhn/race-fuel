import {GO_HOME} from '../actions/navigation'
import {NEXT_LAP} from '../actions/fuelList'

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
    case (GO_HOME): {
      return {
        lapInfo: []
      }
    }
    default:
      return state
  }
}

export default splits
