import { combineReducers } from "redux"
import { teamReducer } from './teamReducer'
import { favReducer } from './favReducer'

const rootReducer = combineReducers({
  team: teamReducer,
  favorites: favReducer,
})

export default rootReducer