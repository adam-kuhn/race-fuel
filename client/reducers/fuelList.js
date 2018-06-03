import {SETLIST, NEXT_LAP} from '../actions'
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
  ]
}

function fuelList (state = initialState, action) {
  switch (action.type) {
    case (SETLIST): {
      return {
        ...state,
        gu: action.fuel.gu,
        clifbar: action.fuel.clifbar,
        balls: action.fuel.balls,
        pbj: action.fuel.pbj,
        banana: action.fuel.banana,
        water: action.fuel.water
      }
    }
    case (NEXT_LAP): {
      for (let fuel in action.lapFuel) {
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
