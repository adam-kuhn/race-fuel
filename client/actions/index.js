export const SETLIST = 'SETLIST'
export const SHOW_FUEL_LIST = 'SHOW_FUEL_LIST'
export const NEXT_LAP = 'NEXT_LAP'
export const ADD_TO_LIST = 'ADD_TO_LIST'
export const STANDARD = 'STANDARD'
export const CUSTOM = 'CUSTOM'

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
export const update = (lap, lapFuel, fuelList) => {
  return {
    type: NEXT_LAP,
    lap,
    lapFuel,
    fuelList
  }
}
export const nextLap = (lap, lapFuel) => {
  return (dispatch, getState) => {
    const state = getState()
    dispatch(update(lap, lapFuel, state.fuelList.fuel))
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
