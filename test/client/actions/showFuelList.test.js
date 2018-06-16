import {showFuelList, SHOW_FUEL_LIST} from '../../../client/actions'

test('showFuelList dispatches correct action.type SHOW_FUEL_LIST', () => {
  const expected = SHOW_FUEL_LIST
  const actual = showFuelList()
  expect(actual.type).toBe(expected)
})
