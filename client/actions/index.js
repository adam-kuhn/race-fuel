export const SETLIST = 'SETLIST'
export const SHOW_FUEL_LIST = 'SHOW_FUEL_LIST'
export const NEXT_LAP = 'NEXT_LAP'
export const TOTALS = 'TOTALS'

export const showFuelList = () => {
  return {
    type: SHOW_FUEL_LIST
  }
}
export const setList = (fuel) => {
  return {
    type: SETLIST,
    fuel
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
    dispatch(update(lap, lapFuel, state.fuelList))
  }
}
