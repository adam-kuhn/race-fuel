import {NEXT_LAP} from '../actions'

const initialState = {
  fuel: [
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
  updated: 0
}

// const fuelItem = Object.keys(action.lapFuel)
// for (let item of action.fuelList.fuel) {
//   for (let fuelName of fuelItem) {
//     if (item.name === fuelName) {
//       item.amount = item.amount - action.lapFuel[fuelName]
//     }
//   }
// }

function totals (state = initialState, action) {
  switch (action.type) {
    case (NEXT_LAP): {
      console.log('totals', action.totals)
      console.log('lap', action.lapFuel)
      const fuelItem = Object.keys(action.lapFuel)
      for (let item of action.totals) {
        for (let fuelName of fuelItem) {
          if (item.type === fuelName) {
            item.amount = item.amount + action.lapFuel[fuelName]
          }
        }
      }
      // for (let fuel in action.lapFuel) {
      //   action.totals[fuel] = action.totals[fuel] + action.lapFuel[fuel]
      // }
      return {
        ...state,
        updated: state.updated + 1
      }
    }
    default:
      return state
  }
}

export default totals
