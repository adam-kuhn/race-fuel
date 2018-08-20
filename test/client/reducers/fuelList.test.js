import {CUSTOM, GO_HOME} from '../../../client/actions/navigation'
import {SETLIST, NEXT_LAP, ADD_TO_LIST} from '../../../client/actions/fuelList'
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
    text: 'Calories'
  }]
  const action = {
    type: CUSTOM
  }
  const actual = fuelList(state, action)
  expect(actual.fuel[0].id).toBe(expected[0].id)
  expect(actual.fuel[0].name).toBe(expected[0].name)
  expect(actual.fuel[0].totalAmount).toBe(expected[0].totalAmount)
  expect(actual.fuel[0].text).toBe(expected[0].text)
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
  expect(actual.fuel[3].amount).toBe(expected[0].amount)
  expect(actual.fuel[6].amount).toBe(expected[1].amount)
})

test('fuelList updates lap count on NEXT_LAP', () => {
  const expected = {
    lap: 3
  }
  const action = {
    type: NEXT_LAP,
    lapFuel: [{}],
    fuelList: [{}],
    lap: 2
  }
  const actual = fuelList(state, action)
  expect(actual.lap).toBe(expected.lap)
})

test('fuelList updates overall list on NEXT_LAP', () => {
  const expected = -3
  const action = {
    type: NEXT_LAP,
    lapFuel: {
      clifbar: {
        value: 3}
    },
    fuelList: list,
    lap: 2
  }
  const actual = fuelList(state, action)
  expect(actual.fuel[2].amount).toBe(expected)
})

test('fuelList adds a new item on ADD_TO_LIST', () => {
  const expectedAmount = 0
  const expectedText = 'new item'
  const expectedId = 8
  const action = {
    type: ADD_TO_LIST,
    fuelList: list,
    item: {
      name: 'new item'
    }
  }
  const actual = fuelList(state, action)
  expect(actual.fuel[actual.fuel.length - 1].text).toBe(expectedText)
  expect(actual.fuel[actual.fuel.length - 1].totalText).toBe(expectedText)
  expect(actual.fuel[actual.fuel.length - 1].name).toBe(expectedText)
  expect(actual.fuel[actual.fuel.length - 1].id).toBe(expectedId)
  expect(actual.fuel[actual.fuel.length - 1].amount).toBe(expectedAmount)
  expect(actual.fuel[actual.fuel.length - 1].totalAmount).toBe(expectedAmount)
})

test('fuelList returns all amount to 0 on GO_HOME', () => {
  const expected = 0
  const action = {
    type: GO_HOME,
    list: [{
      name: 'pbj',
      amount: 22,
      totalAmount: 2
    },
    {name: 'balls',
      amount: 3,
      totalAmoun: -3}
    ]
  }
  const actual = fuelList(state, action)
  expect(actual.fuel[0].amount).toBe(expected)
  expect(actual.fuel[1].amount).toBe(expected)
  expect(actual.fuel[0].totalAmount).toBe(expected)
  expect(actual.fuel[1].totalAmount).toBe(expected)
})
