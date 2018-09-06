export const CLEAN_APP = 'CLEAN_APP'

export const cleanApp = (list, distanceTime) => {
  return {
    type: CLEAN_APP,
    list,
    distanceTime
  }
}
