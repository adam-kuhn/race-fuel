import display from '../../../client/reducers/display'
import {SETLIST, SHOW_FUEL_LIST,
  STANDARD, CUSTOM, GO_HOME} from '../../../client/actions'

const state = {
  showSelect: true
}
test('display returns correct display on SHOW_FUEL_LIST', () => {
  const expected = true
  const action = {
    type: SHOW_FUEL_LIST
  }
  const actual = display(state, action)
  expect(actual.showFuelList).toBe(expected)
})

test('display does not overwrite previous state on SHOW_FUEL_LIST', () => {
  const expected = 2
  const action = {
    type: SHOW_FUEL_LIST
  }
  const actual = display(state, action)
  const keys = Object.keys(actual)
  expect(keys.length).toBe(expected)
})

test('display returns correct display on SETLIST', () => {
  const expected = false
  const action = {
    type: SETLIST
  }
  const actual = display(state, action)
  expect(actual.showFuelList).toBe(expected)
})

test('display does not overwrite previous state on SETLIST', () => {
  const expected = 2
  const action = {
    type: SETLIST
  }
  const actual = display(state, action)
  const keys = Object.keys(actual)
  expect(keys.length).toBe(expected)
})

test('display returns correct display on STANDARD', () => {
  const expected = false
  const action = {
    type: STANDARD
  }
  const actual = display(state, action)
  expect(actual.showSelect).toBe(expected)
})

test('display does overwrite previous state on STANDARD', () => {
  const expected = 1
  const action = {
    type: STANDARD
  }
  const actual = display(state, action)
  const keys = Object.keys(actual)
  expect(keys.length).toBe(expected)
})
