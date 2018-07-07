import {TOGGLE_UNITS, NEXT_LAP, GO_HOME} from '../actions'

const initialState = {
  measurements: [
    {
      id: '1m',
      name: 'distance',
      text: {
        km: 'Distance (Km)',
        mi: 'Distance (Mi)'
      },
      totalAmount: 0
    },
    {
      id: '2m',
      name: 'time',
      text: {
        main: 'Time',
        hour: 'hour',
        min: 'min',
        sec: 's'
      },
      totalAmount: {
        hour: 0,
        min: 0,
        sec: 0
      }
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
      console.log(action.distanceTime[1].totalAmount)
      const {distanceTime, lapFuel} = action
      // for (let value = 0; value < action.distanceTime.length; value++) {
      for (let value of distanceTime) {
        // for (let measured in action.lapFuel) {
        for (let measured in lapFuel) {
          // if (measured === action.distanceTime[value].name) {
          if (measured === value.name) {
            // action.distanceTime[value].totalAmount += action.lapFuel[measured]
            value.totalAmount += lapFuel[measured]
          }
        }
      }
      return {
        ...state,
        measurements: [...distanceTime]
      }
    }
    case (GO_HOME): {
      const measurements = action.distanceTime
      for (let unit of measurements) {
        unit.totalAmount = 0
      }
      return {
        ...state,
        // it works without the below line, I can just return state. but not sure why, because that does not work on NEXT_LAP
        measurements: [...measurements]

      }
    }

    default: {
      return initialState
    }
  }
}

export default distanceAndTime
