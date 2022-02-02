import Types from './Types'

const favoritesReducer = (state = [], action) => {
  switch (action.type) {
    case Types.ADD_TO_FAVORITES:
      return {
        ...state,
        favoritesList: state.favoritesList + 1,
      }
    case Types.REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favoritesList: state.favoritesList + 1,
      }
    default:
      return state
  }
}

export default favoritesReducer
