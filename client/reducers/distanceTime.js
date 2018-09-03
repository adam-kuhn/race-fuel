import {NEXT_LAP} from '../actions/fuelList'
import {TOGGLE_UNITS} from '../actions/toggle'
import {CLEAN_APP} from '../actions/reset'

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
        sec: 'sec'
      },
      totalAmount: {
        hour: 0,
        min: 0,
        sec: 0
      }
    }
  ]
}
const sumTime = (time) => {
  if (time.sec > 60) {
    time.sec -= 60
    time.min++
    sumTime(time)
  }
  if (time.min > 60) {
    time.min -= 60
    time.hour++
    sumTime(time)
  }
  return time
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
      const {distanceTime, lapFuel} = action
      for (let value of distanceTime) {
        for (let measured in lapFuel) {
          if (measured === value.name && value.name === 'time') {
            for (let unitOfTime in value.totalAmount) {
              value.totalAmount[unitOfTime] +=
              (lapFuel[measured][unitOfTime] || 0)
            }
          } else if (measured === value.name && value.name === 'distance') {
            value.totalAmount += lapFuel[measured].value
          }
        }
      }
      const timeValue = distanceTime[1].totalAmount
      const adjustedTime = sumTime(timeValue)
      distanceTime[1].totalAmount = adjustedTime
      return {
        ...state,
        measurements: [...distanceTime]
      }
    }
    case (CLEAN_APP): {
      const measurements = action.distanceTime
      for (let unit of measurements) {
        if (unit.name === 'time') {
          for (let unitOfTime in unit.totalAmount) {
            unit.totalAmount[unitOfTime] = 0
          }
        } else {
          unit.totalAmount = 0
        }
      }
      return {
        ...state,
        measurements: [...measurements]
      }
    }

    default: {
      return initialState
    }
  }
}

export default distanceAndTime
