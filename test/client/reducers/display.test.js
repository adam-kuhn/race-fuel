import display from '../../../client/reducers/display'
import {SETLIST, SHOW_EDIT_LIST, GO_HOME} from '../../../client/actions'
import {STANDARD, CUSTOM} from '../../../client/actions/select'

const state = {
  showSelect: true,
  showNav: false,
  showEditList: false,
  showList: false,
  showLap: false,
  showSplits: false,
  showTotals: false,
  disableSplitButton: true,
  km: true,
  litre: true
}

test('display returns correct display on SHOW_EDIT_LIST', () => {
  const expected = true
  const action = {
    type: SHOW_EDIT_LIST
  }
  const actual = display(state, action)
  expect(actual.showEditList).toBe(expected)
})

test('display does not overwrite previous state on SHOW_EDIT_LIST', () => {
  const expected = 10
  const action = {
    type: SHOW_EDIT_LIST
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
  expect(actual.showEditList).toBe(expected)
})

test('display does not overwrite previous state on SETLIST', () => {
  const expected = 10
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
  const expected = 10
  const action = {
    type: STANDARD
  }
  const actual = display(state, action)
  const keys = Object.keys(actual)
  expect(keys.length).toBe(expected)
})

test('display returns correct display on CUSTOM', () => {
  const expected = {
    showSelect: false,
    showEditList: true
  }
  const action = {
    type: CUSTOM
  }
  const actual = display(state, action)
  expect(actual.showSelect).toBe(expected.showSelect)
  expect(actual.showFuelList).toBe(expected.showFuelList)
})

test('display does overwrite previous state CUSTOM', () => {
  const expected = 10
  const action = {
    type: CUSTOM
  }
  const actual = display(state, action)
  const keys = Object.keys(actual)
  expect(keys.length).toBe(expected)
})

test('display returns correct display on GO_HOME', () => {
  const expected = true
  const action = {
    type: GO_HOME
  }
  const actual = display(state, action)
  expect(actual.showSelect).toBe(expected)
})

test('display does NOT overwrite previous state GO_HOME', () => {
  const expected = 10
  const action = {
    type: GO_HOME
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
  expect(actual.showSelect).toBe(expected)
  expect(keys.length).toBe(10)
})
