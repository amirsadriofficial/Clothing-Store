import Types from './Types'

const filterReducer = (state = { filter: '' }, action) => {
  switch (action.type) {
    case Types.UP_TO_ONE_HUNDRED_PRICE:
      return {
        ...state,
        filter: action.price,
      }
    case Types.ABOVE_ONE_HUNDRED_PRICE: {
      return {
        ...state,
        filter: action.price,
      }
    }
    default:
      return state
  }
}

export default filterReducer
