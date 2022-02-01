import Types from './Types'

export const addToFavorites = () => {
  return {
    type: Types.ADD_TO_FAVORITES,
  }
}

export const removeFromFavorites = () => {
  return {
    type: Types.REMOVE_FROM_FAVORITES,
  }
}
