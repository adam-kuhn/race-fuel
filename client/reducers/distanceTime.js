import {TOGGLE_UNITS, NEXT_LAP} from '../actions'

const initialState = {
  measurements: [
    {
      id: '1m',
      name: 'distance',
      text: 'Distance (Km)',
      textMi: 'Distance (Mi)',
      totalAmount: 0
    },
    {
      id: '2m',
      name: 'time',
      text: 'Time',
      totalAmount: 0
    }
  ]
}

const distanceAndTime = (state = initialState, action) => {
  switch (action.type) {
    case (TOGGLE_UNITS): {
      if (action.boolean === true) {
        action.measurements[0].totalAmount = action.distance / 1.6
      } else {
        action.measurements[0].totalAmount = action.distance * 1.6
      }
      return {
        ...state,
        measurements: [...action.measurements]
      }
    }
    case (NEXT_LAP): {
      for (let value = 0; value < action.distanceTime.length; value++) {
        for (let measured in action.lapFuel) {
          if (measured === action.distanceTime[value].name) {
            action.distanceTime[value].totalAmount += action.lapFuel[measured]
          }
        }
      }
      return {
        ...state,
        measurements: [...action.distanceTime]
      }
    }
    default: {
      return initialState
    }
  }
}

export default distanceAndTime
