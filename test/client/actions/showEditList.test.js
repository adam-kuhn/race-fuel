import {showEditList, SHOW_EDIT_LIST} from '../../../client/actions'

test('showFuelList dispatches correct action.type SHOW_FUEL_LIST', () => {
  const expected = SHOW_EDIT_LIST
  const actual = showEditList()
  expect(actual.type).toBe(expected)
})
