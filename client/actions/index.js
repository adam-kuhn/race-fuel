export const SETLIST = 'SETLIST'
export const SHOW_FUEL_LIST = 'SHOW_FUEL_LIST'
export const NEXT_LAP = 'NEXT_LAP'
export const ADD_TO_LIST = 'ADD_TO_LIST'
export const STANDARD = 'STANDARD'
export const CUSTOM = 'CUSTOM'
export const GO_HOME = 'GO_HOME'
export const TOGGLE_UNITS = 'TOGGLE_UNITS'
export const TOGGLE_WATER = 'TOGGLE_WATER'

export const showFuelList = () => {
  return {
    type: SHOW_FUEL_LIST
  }
}
export const setList = (fuelList) => {
  return {
    type: SETLIST,
    fuelList
  }
}
export const update = (lap, lapFuel, fuelList, distanceTime) => {
  return {
    type: NEXT_LAP,
    lap,
    lapFuel,
    fuelList,
    distanceTime
  }
}
export const nextLap = (lap, lapFuel) => {
  return (dispatch, getState) => {
    const state = getState()
    dispatch(update(lap, lapFuel, state.fuelList.fuel, state.distanceTime.measurements))
  }
}

export const addItemToList = (item, fuelList) => {
  return {
    type: ADD_TO_LIST,
    item,
    fuelList
  }
}
export const addItem = (item) => {
  return (dispatch, getState) => {
    const state = getState()
    dispatch(addItemToList(item, state.fuelList.fuel))
  }
}

export const standard = () => {
  return {
    type: STANDARD
  }
}

export const custom = () => {
  return {
    type: CUSTOM
  }
}

export const goHome = (list, distanceTime) => {
  return {
    type: GO_HOME,
    list,
    distanceTime
  }
}

export const changeUnits = (boolean, distance, measurements) => {
  return {
    type: TOGGLE_UNITS,
    boolean,
    distance,
    measurements
  }
}

export const changeWater = (boolean) => {
  return {
    type: TOGGLE_WATER,
    boolean
  }
}
