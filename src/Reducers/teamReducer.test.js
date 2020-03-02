import { teamReducer } from '../reducer/teamReducer'

it('should return the initial state if there is no state provided', () => {
  const expected = {}
  const result = teamReducer(undefined, {})
  expect(result).toEqual(expected)
})