import Types from './Types'

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case Types.ADD_TO_CART:
      return {
        ...state,
        cartList: state.cartList + 1,
      }
    case Types.REMOVE_FROM_CART:
      return {
        ...state,
        cartList: state.cartList + 1,
      }
    default:
      return state
  }
}

export default cartReducer
