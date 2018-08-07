export const SHOW_EDIT_LIST = 'SHOW_EDIT_LIST'
export const GO_HOME = 'GO_HOME'
export const SHOW_SPLITS = 'SHOW_SPLITS'
export const SHOW_LAP = 'SHOW_LAP'
export const SHOW_LIST = 'SHOW_LIST'
export const SHOW_TOTALS = 'SHOW_TOTALS'

export const showEditList = () => {
  return {
    type: SHOW_EDIT_LIST
  }
}

export const goHome = (list, distanceTime) => {
  return {
    type: GO_HOME,
    list,
    distanceTime
  }
}

export const showSplits = () => {
  return {
    type: SHOW_SPLITS
  }
}

export const navigate = (type) => {
  return {
    type
  }
}
