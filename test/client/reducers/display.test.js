import display from '../../../client/reducers/display'
import {CLEAN_APP} from '../../../client/actions/reset'
const state = {
  disableSplitButton: true,
  km: true,
  litre: true
}

test('display returns correct display on CLEAN_APP', () => {
  const expected = true
  const action = {
    type: CLEAN_APP
  }
  const actual = display(state, action)
  expect(actual.km).toBe(expected)
  expect(actual.litre).toBe(expected)
})

test('display does NOT overwrite previous state CLEAN_APP', () => {
  const expected = 3
  const action = {
    type: CLEAN_APP
  }
  const actual = display(state, action)
  const keys = Object.keys(actual)
  expect(keys.length).toBe(expected)
})

test('returns state on default', () => {
  const expected = true
  const action = {
    type: 'no action'
  }
  const actual = display(state, action)
  const keys = Object.keys(actual)
  expect(actual.km).toBe(expected)
  expect(keys.length).toBe(3)
})
