export const SETLIST = 'SETLIST'
export const SHOW_FUEL_LIST = 'SHOW_FUEL_LIST'
export const NEXT_LAP = 'NEXT_LAP'

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
export const update = (lap, lapFuel, fuelList, totals) => {
  lapFuel.clifbar = lapFuel.clifbar / 2
  lapFuel.pbj = lapFuel.pbj / 2
  lapFuel.balls = lapFuel.balls * 2
  lapFuel.water = lapFuel.water / 1000
  return {
    type: NEXT_LAP,
    lap,
    lapFuel,
    fuelList,
    totals
  }
}
export const nextLap = (lap, lapFuel) => {
  return (dispatch, getState) => {
    const state = getState()
    dispatch(update(lap, lapFuel, state.fuelList, state.totals))
  }
}
