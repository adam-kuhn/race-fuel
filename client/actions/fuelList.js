export const SETLIST = 'SETLIST'
export const NEXT_LAP = 'NEXT_LAP'
export const ADD_TO_LIST = 'ADD_TO_LIST'
export const DELETE_ITEM = 'DELETE_ITEM'

export const setList = (fuelList) => {
  return {
    type: SETLIST,
    fuelList
  }
}

export const update = (lap, lapFuel, fuelList, distanceTime) => {
 console.log('NEXT_LAP')
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

export const deleteItem = (itemId) => {
  return {
    type: DELETE_ITEM,
    itemId
  }
}
