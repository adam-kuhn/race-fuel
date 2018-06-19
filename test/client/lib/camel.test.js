import camelize from '../../../client/lib/camel'

test('camelize converts first letter to lowerCase "This in to camelcase"', () => {
  const string = 'This in to camelcase'
  const expected = 'thisInToCamelcase'
  const actual = camelize(string)
  expect(actual).toBe(expected)
})

test('camelize ignores uppercase letters after spaces "this In To camelcase"', () => {
  const string = 'this In To camelcase'
  const expected = 'thisInToCamelcase'
  const actual = camelize(string)
  expect(actual).toBe(expected)
})

test('camelize removes special characters', () => {
  const string = 'make$j tHis() cameL Case'
  const expected = 'makeJThisCamelCase'
  const actual = camelize(string)
  expect(actual).toBe(expected)
})
