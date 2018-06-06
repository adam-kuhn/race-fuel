import {SETLIST, NEXT_LAP, SHOW_FUEL_LIST, ADD_TO_LIST} from '../actions'
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
      totalText: 'ClifBars eaten',
      itemCalories: 135
    },
    {
      id: 3,
      name: 'gu',
      amount: 0,
      liveText: 'Gu',
      lapText: 'Gu (1 gel)',
      totalAmount: 0,
      totalText: 'Gu gels eaten',
      itemCalories: 100
    },
    {
      id: 4,
      name: 'pbj',
      amount: 0,
      liveText: 'Peanut Butter and Jelly Sandwiches',
      lapText: 'Peanut Butter and Jelly Sandwiches (1/2)',
      totalAmount: 0,
      totalText: 'Peanut Butter and Jelly Sandwiches eaten',
      itemCalories: 100
    },
    {
      id: 5,
      name: 'balls',
      amount: 0,
      liveText: 'Power Balls',
      lapText: 'Power Balls (2 balls)',
      totalAmount: 0,
      totalText: 'Power Balls eaten',
      itemCalories: 110
    },
    {
      id: 6,
      name: 'banana',
      amount: 0,
      liveText: 'Bananas',
      lapText: 'Bananas (1)',
      totalAmount: 0,
      totalText: 'Bananas eaten',
      itemCalories: 100
    },
    {
      id: 7,
      name: 'water',
      amount: 0,
      liveText: 'Water (L)',
      lapText: 'Water (mL)',
      totalAmount: 0,
      totalText: 'Water drank'
      // itemCalories: 1
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
    case (ADD_TO_LIST): {
      action.item.id = action.fuelList.length + 1
      action.item.liveText = action.item.name
      action.item.lapText = action.item.name
      action.item.totalAmount = 0
      action.item.totalText = action.item.name
      return {
        ...state,
        fuel: [...action.fuelList, action.item]
      }
    }
    default: {
      return state
    }
  }
}

export default fuelList
