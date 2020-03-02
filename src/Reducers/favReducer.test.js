import { favReducer } from '../Reducers/favReducer'

it('should return the initial state if there is no state provided', () => {
  const expected = []
  const result = favReducer(undefined, [])
  expect(result).toEqual(expected)
})

