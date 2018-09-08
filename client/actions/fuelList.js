export const SETLIST = 'SETLIST'
export const NEXT_LAP = 'NEXT_LAP'
export const ADD_TO_LIST = 'ADD_TO_LIST'
export const DELETE_ITEM = 'DELETE_ITEM'
export const LIVE_APP = 'LIVE_APP'
export const CLOSE_NAV = 'CLOSE_NAV'

export const setList = (fuelList) => {
  return {
    type: SETLIST,
    fuelList
  }
}

export const nextLap = (lap, lapFuel) => {
  return {
    type: NEXT_LAP,
    lap,
    lapFuel
  }
}

export const addItem = (item) => {
  return {
    type: ADD_TO_LIST,
    item
  }
}

export const deleteItem = (itemId) => {
  return {
    type: DELETE_ITEM,
    itemId
  }
}

export const appIsLive = () => {
  return {
    type: LIVE_APP
  }
}

export const closeNav = () => {
  return {
    type: CLOSE_NAV
  }
}
