export const TOGGLE_UNITS = 'TOGGLE_UNITS'
export const TOGGLE_WATER = 'TOGGLE_WATER'

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
