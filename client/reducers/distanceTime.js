import {TOGGLE_UNITS} from '../actions'

const initialState = {
  measurements: [
    {
      id: '1m',
      name: 'distance',
      keyName: 'distance',
      lapTextKm: 'distance (km)',
      lapTextMi: 'distance (Mi)',
      totalAmount: 0,
      totalTextKm: 'Distance (km)',
      totalTextMi: 'Distance (mi)'
    },
    {
      id: '2m',
      name: 'time',
      keyName: 'time',
      lapText: 'time',
      totalAmount: 0,
      totalText: 'time'
    }
  ]
}

const distanceAndTime = (state = initialState, action) => {
  switch (action.type) {
    case (TOGGLE_UNITS): {
      return {
        ...state,
        distance: 2
      }
    }
    default: {
      return initialState
    }
  }
}

export default distanceAndTime
