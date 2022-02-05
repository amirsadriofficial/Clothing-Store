import Types from './Types'

const favoritesReducer = (state = { favorites: [] }, action) => {
  switch (action.type) {
    case Types.ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, action.product],
      }
    case Types.REMOVE_FROM_FAVORITES: {
      const newFavorites = state.favorites
      newFavorites.splice(
        state.favorites.findIndex((product) => product === action.id),
        1
      )
      return {
        ...state,
        favorites: newFavorites,
      }
    }
    default:
      return state
  }
}

export default favoritesReducer
