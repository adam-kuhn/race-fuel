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
export const nextLap = (lap) => {
  return {
    type: NEXT_LAP,
    lap
  }
}
