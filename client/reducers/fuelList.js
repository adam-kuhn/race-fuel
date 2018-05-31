import {SETLIST} from '../actions'
const initialState = {
  gu: 0,
  clifbar: 0,
  balls: 0,
  pbj: 0
}

function fuelList (state = initialState, action) {
  switch (action.type) {
    case (SETLIST): {
      return {
        gu: action.fuel.gu,
        clifbar: action.fuel.clifbar,
        balls: action.fuel.balls,
        pbj: action.fuel.pbj
      }
    }
    default: {
      return state
    }
  }
}

export default fuelList
