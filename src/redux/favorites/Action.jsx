import Types from './Types'

export const ADD_TO_FAVORITES_ACTION = () => {
  return {
    type: Types.ADD_TO_FAVORITES,
  }
}

export const REMOVE_FROM_FAVORITES_ACTION = () => {
  return {
    type: Types.REMOVE_FROM_FAVORITES,
  }
}
