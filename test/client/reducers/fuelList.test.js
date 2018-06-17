import {SETLIST, NEXT_LAP, ADD_TO_LIST,
  CUSTOM, GO_HOME} from '../../../client/actions'
import fuelList from '../../../client/reducers/fuelList'
import list from '../../../client/lib/standardFuel'

const state = {
  fuel: list,
  lap: 1
}

test('fueList does not return a preset list on CUSTOM', () => {
  const expected = [{
    id: 1,
    name: 'calories',
    totalAmount: 0,
    totalText: 'Calories eaten'
  }]
  const action = {
    type: CUSTOM
  }
  const actual = fuelList(state, action)
  expect(actual.fuel[0].id).toBe(expected[0].id)
  expect(actual.fuel[0].name).toBe(expected[0].name)
  expect(actual.fuel[0].totalAmount).toBe(expected[0].totalAmount)
  expect(actual.fuel[0].totalText).toBe(expected[0].totalText)
  expect(actual.lap).toBe(1)
})

test('fuelList updates on the number of items on SETLIST', () => {
  const expected = [{
    name: 'gu',
    amount: 2
  },
  {name: 'banana',
    amount: 5}]
  const action = {
    type: SETLIST,
    fuelList: {
      gu: 2,
      banana: 5
    }
  }
  const actual = fuelList(state, action)
  expect(actual.fuel[2].amount).toBe(expected[0].amount)
  expect(actual.fuel[5].amount).toBe(expected[1].amount)
})
