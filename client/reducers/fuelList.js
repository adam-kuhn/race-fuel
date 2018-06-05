import {SETLIST, NEXT_LAP, SHOW_FUEL_LIST} from '../actions'
const initialState = {
  fuel: [
    // {
    //   id: 1,
    //   type: 'calories',
    //   amount: 0,
    //   text: 'Calories eaten'
    // },
    {
      id: 2,
      name: 'clifbar',
      amount: 0,
      liveText: 'ClifBars',
      lapText: 'ClifBars (1/2)'
    },
    {
      id: 3,
      name: 'gu',
      amount: 0,
      liveText: 'Gu',
      lapText: 'Gu (1 gel)'
    },
    {
      id: 4,
      name: 'pbj',
      amount: 0,
      liveText: 'Peanut Butter and Jelly Sandwiches',
      lapText: 'Peanut Butter and Jelly Sandwiches (1/2)'
    },
    {
      id: 5,
      name: 'balls',
      amount: 0,
      liveText: 'Power Balls',
      lapText: 'Power Balls (2 balls)'
    },
    {
      id: 6,
      name: 'banana',
      amount: 0,
      liveText: 'Bananas',
      lapText: 'Bananas (1)'
    },
    {
      id: 7,
      name: 'water',
      amount: 0,
      liveText: 'Water (L)',
      lapText: 'Water (mL)'
    }
  ],
  totals: [
    {
      id: 1,
      type: 'calories',
      amount: 0,
      text: 'Calories eaten'
    },
    {
      id: 2,
      type: 'clifbar',
      amount: 0,
      text: 'ClifBars eaten'
    },
    {
      id: 3,
      type: 'gu',
      amount: 0,
      text: 'Gu gels eaten'
    },
    {
      id: 4,
      type: 'pbj',
      amount: 0,
      text: 'Peanut Butter and Jelly Sandwiches eaten'
    },
    {
      id: 5,
      type: 'balls',
      amount: 0,
      text: 'Power Balls eaten'
    },
    {
      id: 6,
      type: 'banana',
      amount: 0,
      text: 'Bananas eaten'
    },
    {
      id: 7,
      type: 'water',
      amount: 0,
      text: 'Water drank'
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
          }
        }
      }
      const itemForTotal = Object.keys(action.lapFuel)
      for (let item of action.totals) {
        for (let fuelName of itemForTotal) {
          if (item.type === fuelName) {
            item.amount = item.amount + action.lapFuel[fuelName]
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
