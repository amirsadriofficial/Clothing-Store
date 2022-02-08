import Types from './Types'

const filterReducer = (state = { carts: [] }, action) => {
  switch (action.type) {
    // case Types.ALL_PRICE:
    //   return {
    //     ...state,
    //   }
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
