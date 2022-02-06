import Types from './Types'

export const ADD_TO_FAVORITES_ACTION = (product) => {
  return {
    type: Types.ADD_TO_FAVORITES,
    product,
  }
}

export const REMOVE_FROM_FAVORITES_ACTION = (product) => {
  return {
    type: Types.REMOVE_FROM_FAVORITES,
    product,
  }
}
