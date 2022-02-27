import Types from './Types'

const favoritesReducer = (state = { favorites: [] }, action) => {
  let newFavorites = []
  switch (action.type) {
    case Types.ADD_TO_FAVORITES:
      newFavorites = [...state.favorites, action.product]
      // localStorage.setItem('Favorites', JSON.stringify(newFavorites))
      return {
        ...state,
        favorites: newFavorites,
      }
    case Types.REMOVE_FROM_FAVORITES: {
      newFavorites = state.favorites
      newFavorites.splice(
        state.favorites.findIndex((product) => product === action.product),
        1
      )
      // localStorage.setItem('Favorites', JSON.stringify(newFavorites))
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
