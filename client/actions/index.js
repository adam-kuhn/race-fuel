export const SETLIST = 'SETLIST'
export const SHOW_FUEL_LIST = 'SHOW_FUEL_LIST'

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
