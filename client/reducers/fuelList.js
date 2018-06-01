import {SETLIST, NEXT_LAP} from '../actions'
const initialState = {
  gu: 0,
  clifbar: 0,
  balls: 0,
  pbj: 0,
  calories: 0
}

function fuelList (state = initialState, action) {
  switch (action.type) {
    case (SETLIST): {
      return {
        ...state,
        gu: action.fuel.gu,
        clifbar: action.fuel.clifbar,
        balls: action.fuel.balls,
        pbj: action.fuel.pbj
      }
    }
    case (NEXT_LAP): {
      for (let fuel in action.lapFuel) {
        // if (fuel === 'calories') {
        //   action.fuelList[fuel] = action.fuelList[fuel] + action.lapFuel[fuel]
        // } else {
        //   action.fuelList[fuel] = action.fuelList[fuel] - action.lapFuel[fuel]
        // }
        action.fuelList[fuel] = action.fuelList[fuel] - action.lapFuel[fuel]
      }

      return action.fuelList
    }
    default: {
      return state
    }
  }
}

export default fuelList
