export const SETLIST = 'SETLIST'
export const SHOW_EDIT_LIST = 'SHOW_EDIT_LIST'
export const NEXT_LAP = 'NEXT_LAP'
export const ADD_TO_LIST = 'ADD_TO_LIST'
export const STANDARD = 'STANDARD'
export const CUSTOM = 'CUSTOM'
export const GO_HOME = 'GO_HOME'
export const TOGGLE_UNITS = 'TOGGLE_UNITS'
export const TOGGLE_WATER = 'TOGGLE_WATER'
export const SHOW_SPLITS = 'SHOW_SPLITS'
export const BACK_TO_MAIN = 'BACK_TO_MAIN'
export const DELETE_ITEM = 'DELETE_ITEM'
export const SHOW_LAP = 'SHOW_LAP'
export const SHOW_LIST = 'SHOW_LIST'

export const showEditList = () => {
  return {
    type: SHOW_EDIT_LIST
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

export const changeWater = (boolean, fuel, totalWater, water) => {
  return {
    type: TOGGLE_WATER,
    boolean,
    fuel,
    totalWater,
    water
  }
}

export const showSplits = () => {
  return {
    type: SHOW_SPLITS
  }
}

export const backToMain = () => {
  return {
    type: BACK_TO_MAIN
  }
}

export const deleteItem = (itemId) => {
  return {
    type: DELETE_ITEM,
    itemId
  }
}

export const navigate = (type) => {
  return {
    type
  }
}
