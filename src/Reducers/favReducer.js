export const favReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [...state, action.team]
    case 'DELETE_FAVORITE':
      let favorites = state.filter(favTeam => favTeam.id !== action.id)
      return favorites
    default:
      return state
  }
}