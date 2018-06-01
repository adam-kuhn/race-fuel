import {NEXT_LAP} from '../actions'

const initialState = {
  calories: 0,
  clifbar: 0,
  gu: 0,
  pbj: 0,
  balls: 0
}

function totals (state = initialState, action) {
  console.log(action.totals)
  switch (action.type) {
    case (NEXT_LAP): {
      for (let fuel in action.lapFuel) {
        action.totals[fuel] = action.totals[fuel] + action.lapFuel[fuel]
      }
      return action.totals
    }
    default:
      return state
  }
}

export default totals
