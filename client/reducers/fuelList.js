import {SETLIST, NEXT_LAP, SHOW_FUEL_LIST} from '../actions'
const initialState = {
  fuel: [
    {
      id: 1,
      name: 'calories',
      totalAmount: 0,
      totalText: 'Calories eaten'
    },
    {
      id: 2,
      name: 'clifbar',
      amount: 0,
      liveText: 'ClifBars',
      lapText: 'ClifBars (1/2)',
      totalAmount: 0,
      totalText: 'ClifBars eaten'
    },
    {
      id: 3,
      name: 'gu',
      amount: 0,
      liveText: 'Gu',
      lapText: 'Gu (1 gel)',
      totalAmount: 0,
      totalText: 'Gu gels eaten'
    },
    {
      id: 4,
      name: 'pbj',
      amount: 0,
      liveText: 'Peanut Butter and Jelly Sandwiches',
      lapText: 'Peanut Butter and Jelly Sandwiches (1/2)',
      totalAmount: 0,
      totalText: 'Peanut Butter and Jelly Sandwiches eaten'
    },
    {
      id: 5,
      name: 'balls',
      amount: 0,
      liveText: 'Power Balls',
      lapText: 'Power Balls (2 balls)',
      totalAmount: 0,
      totalText: 'Power Balls eaten'
    },
    {
      id: 6,
      name: 'banana',
      amount: 0,
      liveText: 'Bananas',
      lapText: 'Bananas (1)',
      totalAmount: 0,
      totalText: 'Bananas eaten'
    },
    {
      id: 7,
      name: 'water',
      amount: 0,
      liveText: 'Water (L)',
      lapText: 'Water (mL)',
      totalAmount: 0,
      totalText: 'Water drank'
    }
  ],
  fuelSet: false,
  lap: 1
}

function fuelList (state = initialState, action) {
  switch (action.type) {
    case (SETLIST): {
      const fuelItem = Object.keys(action.fuelList)
      for (let item of state.fuel) {
        for (let fuelName of fuelItem) {
          if (item.name === fuelName) {
            item.amount = action.fuelList[fuelName]
          }
        }
      }
      return {
        ...state,
        fuelSet: true
      }
    }
    case (SHOW_FUEL_LIST): {
      return {
        ...state,
        fuelSet: false
      }
    }
    case (NEXT_LAP): {
      const fuelItem = Object.keys(action.lapFuel)
      for (let item of action.fuelList) {
        for (let fuelName of fuelItem) {
          if (item.name === fuelName) {
            item.amount = item.amount - action.lapFuel[fuelName]
            item.totalAmount = item.totalAmount + action.lapFuel[fuelName]
          }
        }
      }
      return {
        ...state,
        lap: action.lap + 1
      }
    }
    default: {
      return state
    }
  }
}

export default fuelList
