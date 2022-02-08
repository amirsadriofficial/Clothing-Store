import Types from './Types'

const cartReducer = (state = { carts: [] }, action) => {
  switch (action.type) {
    case Types.ALL_PRICE:
      return {
        ...state,
      }
    case Types.UP_TO_ONE_HUNDRED_PRICE:
      return {
        ...state,
      }
    case Types.ABOVE_ONE_HUNDRED_PRICE: {
      return {
        ...state,
      }
    }
    default:
      return state
  }
}

export default cartReducer
